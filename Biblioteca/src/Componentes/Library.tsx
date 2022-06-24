import React, { FC, useState, useEffect } from 'react';
import styled from "@emotion/styled";
import axios from 'axios';
import { updateSourceFile } from 'typescript';
import "./Main.css";

type dataProps = {
    numfound: number,
    start: number,
    docs: Books[],
    num_found: number,
};

type Books = {
    key: string;
    cover_i: number;
    cover_edition_key: string;
    title: string;
    author_name: string;
    first_publish_year: number;
    id_amazon: string;
}

const Library: FC<{ text: string }> = ({ text }) => {

    text = text.replaceAll(" ", "+");

    const [data, setData] = useState<dataProps>();
    const [docs, setDocs] = useState<Books[]>([]);
    const [state, setState] = useState<string>("null");
    const [url, setUrl] = useState<string>("http://openlibrary.org/search.json?title=" + text);
    const [maxIndex, setMaxIndex] = useState<number>(16);
    const [minIndex, setMinIndex] = useState<number>(0);

    var responseDate: dataProps;

    const update = (data: dataProps) => { // update actualiza el estado de la aplicación
        setData(data);
        setDocs([...docs, ...data.docs]);
        setState("done");

        if (data.start < data.num_found) { // si no se ha llegado al final de la búsqueda
            if (data.start === 0) { // si es la primera vez que se ejecuta la función se actualiza el valor de minIndex
                setUrl(url + "&page=2"); // se actualiza la url para la siguiente página
            } else {
                var aux = url.split("&"); // se divide la url en partes
                var aux2 = aux[1].split("="); // se divide la segunda parte de la url en partes
                var page = parseInt(aux2[1]) + 1; // se obtiene la página actual + 1
                setUrl(aux[0] + "&" + aux2[0] + "=" + page); // se actualiza la url para la siguiente página
            }
        }
    };

    const updateIndex = () => {
        setMaxIndex(maxIndex + 16); // se actualiza el índice máximo de la búsqueda
        setMinIndex(minIndex + 16); // se actualiza el índice mínimo de la búsqueda
    };

    const updateIndexLess = () => {
        setMaxIndex(maxIndex - 16); // se actualiza el índice máximo de la búsqueda
        setMinIndex(minIndex - 16); // se actualiza el índice mínimo de la búsqueda
    }

    useEffect(() => { //Funcion que se ejecuta al cargar el componente
        axios.get(url).then((response) => { //Se obtiene la respuesta de la API
            if (response.data.numFound > 1000) { //Si el numero de resultados es mayor a 1000 se limita a 1000 resultados
                if (response.data.start < response.data.numFound) { //si el numero de start es menor al numero de resultados
                    console.log(response.data.start, response.data.numFound); //Se imprime el numero de start y el numero de resultados
                };
            };
            update(response.data); //Se actualiza el estado del componente
        });
    }, [url]);

    return (
        <ContainerSearch>
            <div className="palabrasBusqueda"></div>
            {state !== "done" && <p>Buscando....</p>}
            {state === "done" && <p>Búsqueda completa</p>}

            {data && <Botones>
                <IndexNextpPrev onClick={(elem) => updateIndexLess()}>Prev ({minIndex})</IndexNextpPrev>
                <IndexNextpPrev onClick={(elem) => updateIndex()}>Next ({maxIndex})</IndexNextpPrev>
            </Botones>}
            <div className="libros">
                {data && <ListaBooks>
                    {docs.map((elem, index) => {
                        if ((index >= minIndex) && (index < maxIndex)) {
                            return (
                                <Book>
                                    {!elem.cover_i && <img src="https://via.placeholder.com/128x193.png?text=No+image" alt="" />}
                                    {elem.cover_i && <div style={{ backgroundImage: "url(http://covers.openlibrary.org/b/id/" + elem.cover_i + "-M.jpg", height: "270px", width: "188px", justifySelf: "center", marginBottom: "5px" }}></div>}
                                    <div className="datos-libros">
                                        <p>Title: {" "}{elem.title}</p>
                                        <p>Author: {" "}{elem.author_name}</p>
                                        <p>Date: {""}{elem.first_publish_year}</p>
                                    </div>

                                    {elem.id_amazon && <div className="amazon">
                                        <a href={"https://www.amazon.es/dp/" + elem.id_amazon[0]}><p id = "amazonShop">Buy it!</p></a>  
                                    </div>}
                                </Book>
                            )
                        }
                    })}
                </ListaBooks>}
            </div>
        </ContainerSearch>
    )
};

export default Library;

const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Botones = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-around;
    font-size: 30px;
    font-weight: bold;
    color: white;
`;

const IndexNextpPrev = styled.div`
    
`;

const ListaBooks = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 100%;
    overflow: auto;

`;

const Book = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #9afee585;
    box-shadow: 0px 0px 10px black;
    height: 270px;
    width: 100%;
    margin: 10px;
`;