import react, { FC } from "react";
import { ModalCharacter } from "./types";
import "./Styles/ModalRickMorty.css";

const ModalRickMorty: FC<ModalCharacter> = ({ character, show }) => {

    if (!show) {
        return null;
    }

    return (
        <div className="ModalContent">
            <div className="content">
                <div className="Mheader">
                    <h3 className="Mtitle"></h3>
                </div>
                <div className="Mbody">
                    <img src={character.image}></img>
                    <h1>{character.name}</h1>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Type: {character.type}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Current location: {character.location.name}</p>
                    <p>Created: {character.created}</p>
                </div>
            </div>
        </div>
    );
}

export default ModalRickMorty;