import react, { FC, useEffect, useState } from 'react';
import { cocktailsAPI, list } from './Types';
import Buscador from './Buscador';
import Cocktails from './Cocktails';

type inputBuscador = {
    setText: (text: string) => void;
}

type inputList = {
    list: list;
}

const Lookup: FC = ({ children }) => {

    const [name, setName] = useState<string>("");
    const [list, setList] = useState<list>({ drinks: [] });

    const getCocktail = async (text: string) => {
        const urlPrincipal = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}&format=json`;
        setName(urlPrincipal);
    }

    const getIngredient = async (text: string) => {
        const urlPrincipal = `www.thecocktaildb.com/api/json/v1/1/filter.php?i=${text}&format=json`;
        setName(urlPrincipal);   
    }

    useEffect(() => {
        const result = async () => {
            const listin = await getCocktail(name);
            console.log(listin);
        }
        result();
    }, [name]);

    return (
        <div>
            <header className = "header-title">
                <h1>Cocktail</h1>
            </header>
            <div className = "bar">
                <input type = "text" className = "search" value = {name} 
                onChange = {(e) => setName(e.target.value)} 
                placeholder = "Type a name of a Cocktail"></input>

                <button className="buttonS" onClick = {() => {getCocktail(name)}}>
                     Search
                </button>
            </div>
            <div className = "content">
                <Buscador setText =  {list}/>
                <Cocktails key = {name} list = {list}/>
            </div>
        </div>
    );
}

export default Lookup;