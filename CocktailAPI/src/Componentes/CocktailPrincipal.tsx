import react, {FC, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {cocktailApiList} from "./Types/Types";
import Searcher from './Searcher';
import Cocktail from './Cocktails';

const CocktailPrincipal: FC = () =>  {

    const [nameCocktail, setNameCocktail] = useState<string>("");
    const [listCocktails, setListCocktails] = useState<cocktailApiList>({drinks: []});

    const responseListCocktails = async (text: string) => {
        const responseList = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`;
            const cocktail = await fetch(responseList);
            const primerJson = await cocktail.json();
            return primerJson;
    }

    useEffect(() => {
        const result = async () => {
           const response: cocktailApiList = await responseListCocktails(nameCocktail);
           console.log(response.drinks);
           if(response.drinks.length > 0){
               setListCocktails(response);
           }
        }
        result();
        }, [nameCocktail]);

    return (
        <div className = "container">
            <Searcher setText = {setNameCocktail}/>
            <Cocktail key = {nameCocktail} setList = {listCocktails}/>
        </div>
    );
}

export default CocktailPrincipal;