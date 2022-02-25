import React, {FC, useState} from 'react';
import Props from './Props';
import "./styles/Lookup.css"

type IFilmsAPI = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    url: string;
    created: string;
    edited: string;
}

const Lookup: FC = () => {

    const [films, setFilms] = useState<IFilmsAPI[]>([]);
    const [value, setValue] = useState<string>('Type a film name');
    
    const getFilms = async (text: string) => {
        const response = await fetch(`https://swapi.dev/api/films/?search=${text}&format=json`);
        const data = await response.json();
        setFilms(data.results);
    }
    
    return(
        <div className = "Lookup">
            <img className = "logo" src = "./img/star-wars-logo-png-10.png"/>
            <div className = "bar">
                <input type = "text" value = {value} 
                onChange = {(e) => setValue(e.target.value)} 
                onClick = {() => {setValue("")}}></input>
                <button onClick = {() => getFilms(value)}>Search</button>
            </div>
            <Props films = {films}/>
        </div>
    )
}

export default Lookup;