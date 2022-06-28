import react, { FC, useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Characters from './Characters';
import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

//cada vez que ejecuto la query voy a recibir una pagina 
const GET_CHARS = gql` 
    query characters($page: Int, $name: String, $gender: String, $status: String){
        characters(page: $page, filter: {name: $name, gender: $gender, status: $status}) {
            info {
                count,
                pages,
                next,
                prev
            }
            results {
                name, 
                status,
                species,
                gender,
                origin {
                    name
                },
                image
            }
        }
    }
`;

type QueryReturnType = {
    characters: {
        info: {
            count: number,
            pages: number,
            next?: number,
            prev?: number
        },
        results: Array<{
            name: string,
            status: string,
            species: string,
            gender: string,
            origin: {name: string},
            image: string
        }>;
    };
};


type CharactersProps = {
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: {name: string},
    image: string,
};

const Main: FC = () => {

    const [page, setPage] = useState<number>(1); // para saber en que pagina estoy
    const [order, setOrder] = useState<string>("az"); //orden ascendente
    const [name, setName] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [characters, setCharacters] = useState<Array<CharactersProps>>([]); //array de personajes
    const { loading, error, data } = useQuery<QueryReturnType>(GET_CHARS, {
        variables: { page, name, gender, status },
    });

    useEffect(() => {
        //if (data) {
        //    setCharacters(data.characters.results);
        //}

        if (data && order === "az") {
            const aux = [...data.characters.results];
            setCharacters([
                ...aux.sort((a, b) => a.name.localeCompare(b.name))]);
        }

        if (data && order === "za") {
            const aux = [...data.characters.results];
            setCharacters([
                ...aux.sort((a, b) => b.name.localeCompare(a.name))]);
        }

    }, [order, page, data, name, gender, status]); // para que no se ejecute cada vez que cambie el orden o la pagina

    if (loading) {
        return (
            <Content>
                <LoadWrapp>
                    <LoadCircle>
                        <p>Loading ...</p>
                        <RingLoading>
                            <BallHolder>
                                <Ball />
                            </BallHolder>
                        </RingLoading>
                    </LoadCircle>
                </LoadWrapp>
            </Content>
        )
    }

    if (error) {
        return <p>ERROR </p>
    }

    return (

        //la estructura del if es que si existe la parte que está antes de los && lo que haya después entonces se pinta

        //si esxiste prev se pinta (cuando pulso prev resto 1 pagina, para ir a la anterior)
        //si existe next se pinta (cuando pulso next sumo 1 pagina, para ir a la siguiente)
        //si no se pone el numero total depaginas que hay 
        <div>
            <Navigation>
                <p>To use the filters, you need to write the name or the gender and then do click outside of the input to see the results</p>
                <NavigationContent>
                    <a onClick={() => setOrder("az")}>AZ</a> {" -- "}
                    <a onClick={() => setOrder("za")}>ZA</a>
                </NavigationContent>

                <InputFilter type="text" placeholder="Filter by name"
                    onBlur={(elem) => setName(elem.target.value)}>
                </InputFilter>
                <NavigationContent>
                    <SelectFilter name="gender" value={gender} onChange={(elem) => setGender(elem.target.value)}>
                        <option value=" ">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="unknown">Unknown</option>
                    </SelectFilter>
                    <SelectFilter name="status" value={status} onChange={(elem) => setStatus(elem.target.value)}>
                        <option value=" ">Select a status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </SelectFilter>
                </NavigationContent>
            </Navigation>

            <Navigation>
                <NavigationContent>
                    {data?.characters.info.prev &&
                        <a onClick={() => setPage(page - 1)}> {"< "} prev {" ... "}</a>}
                    {" "} {page} {" "}
                    {data?.characters.info.next &&
                        <a onClick={() => setPage(page + 1)}> {" ... "}next {" > "}</a>}

                    ({data?.characters.info.pages})
                </NavigationContent>
            </Navigation>

            <Characters characters={characters} />
        </div>
    )
}

//<a onClick={() => setPage(page - 1)}>prev /</a>

export default Main;

const InputFilter = styled.input`
    width: 60%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    margin-top: 10px;
`;

const LoadWrapp = styled.div`
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px 10px 0;
    padding: 20px 20px 20px;
    border-radius: 5px;
    text-align: center;
    background-color: #d8d8d8;

    :last-child {
        margin-right: 0;
    }
`;

const SelectFilter = styled.select`
    width: 230px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 25px;
    outline: none;
    margin-top: 10px;
`;

const Ball = styled.div`
    position: absolute;
    top: -11px;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #4282b3;
`

const RingLoading = styled.div`
    position: relative;
    width: 45px;
    height: 45px;
    margin: 0 auto;
    border: 4px solid #4b9cdb;
    border-radius: 100%;
`;

const loadingE = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);

    }
`;

const BallHolder = styled.div`
    position: absolute;
    width: 12px;
    height: 45px;
    left: 17px;
    top: 0px;  
`;

const LoadCircle = styled.div`
    .BallHolder{
        animation: ${loadingE} 1.3s linear infinite;
    }
`;

const Content = styled.div`
    padding: 15px;
    overflow: hidden;
    background-color: #e7e7e7;
    background-color: rgba(0, 0, 0, 0.06);
`

const Navigation = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 100%;
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 50px;
    color: white;
    .a {
        cursor: pointer;
    }
`;

const NavigationContent = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
`