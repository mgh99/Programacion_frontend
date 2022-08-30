import react, {FC, useState} from 'react';
import { list } from './Types';

type cocktailsAPI = {
    strDrink: string,
    strDrinkThumb:string,
    strIngredient1: string,
    strIngredient2:  string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
}

type inputBuscador = {
    setText: cocktailsAPI[];
}

type inputList = {
    list: list;
}

const Buscador: FC<inputBuscador> = ({setText}) => {

    const [text, setTextState] = useState<string>("");
    const distribuir = (texto: string) => {
        setTextState(texto);
        
    }

    return (
        <div>
            <input type = "text" placeholder='Search a cocktail' value = {text}
            onChange = {(e) => distribuir(e.target.value)}></input>
        </div>
    )
}

export default Buscador;
