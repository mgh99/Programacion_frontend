import react, {FC, useState} from 'react';
import styled from "@emotion/styled";
import {inputSearch} from "./Types/Types";
import "./Styles/Componentes.css";

const Searcher: FC<inputSearch> = ({setText}) => {

    const [text, setTextState] = useState<string>("");
    const handleChange = (text: string) => {
        setTextState(text);
        setText(text);
    }

    return(
        <div className = "Buscador">
            <InputStyled type = "text" placeholder = "Search your cocktail" value = {text} onChange = {(e) =>
            handleChange(e.target.value)}/>
        </div>
    )
}

export default Searcher;

const InputStyled = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 1.2rem;
    background-color: #f2f2f2;
    outline: none;
    &:focus {
        background-color: #fff;
    }

`;
