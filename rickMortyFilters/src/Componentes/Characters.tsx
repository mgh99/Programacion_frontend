import react, { FC } from 'react';
import styled from "@emotion/styled";
import "./Styles/Characters.css";

type CharactersProps = {
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: {
        name: string;
      };
    image: string,
}

const Characters: FC<{ characters: Array<CharactersProps> }> = ({ characters }) => {
    return (
        <Container>
            {characters.map((character) => {
                return (
                   
                        <Character key={Character.name}>
                            <h1>{character.name}</h1>
                            <img src={character.image} alt={character.name}></img>
                            <p>{character.status}</p>
                            <p>{character.origin.name}</p>
                            <p>{character.species}</p>
                            <p>{character.gender}</p>
                        </Character>
                    
                );
            }
            )}
        </Container>
    )
};

export default Characters;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

const Character = styled.div`
    width: 18%;
    margin: 10px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    color: white;
    border-radius: 20px;
    background-color: #544e4e;
    display: flex;
`