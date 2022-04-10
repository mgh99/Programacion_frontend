import react, { FC, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from './Query';
import { Characters, ICharactersProps, Character } from './types';
import ModalRickMorty from './ModalRickMorty';
import Error from "./Error";
import "./Styles/CharactersRM.css";
import { hkdf } from 'crypto';

const CharactersRM: FC<ICharactersProps> = ({page}) => {

    const {data, loading, error, refetch} = useQuery<Characters>(GET_CHARACTERS, {variables: {page: page}});
    const [mostrarModal, setMostrarModal] = useState(false);

    //con esto se puede mostrar el modal
    const [characterModal, setCharacterModal] = useState({ 
        id: 0,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {id: 0, name: "", type: "", dimension: "", created: ""},
        location: {id: 0, name: "", type: "", dimension: "", created: ""},
        image: "",
        created: ""
    });
    
    if(loading) {
        return <h1>Cargando...</h1>
    }

    //en <ModalRickMorty /> se puede acceder a los datos del characterModal

    if(data) { 
        return(
            <div className = "characters">
                {data!.characters.results.map((e) => <div key = {e.id} onClick = {() => { 
                    setCharacterModal(e); 
                    setMostrarModal(!mostrarModal); 
                }}>
                    <ModalRickMorty character = {characterModal} show={mostrarModal}/> 
                    <div className = "character-style">
                        <img src = {e.image}></img>
                        <div className = "letras-name">
                            {e.name}
                        </div>
                    </div>
            </div>)}
            </div>
        );
        
        //error
    } else {
        return (
            <div>
                <Error/>
            </div>
        )
    }
}

export default CharactersRM;