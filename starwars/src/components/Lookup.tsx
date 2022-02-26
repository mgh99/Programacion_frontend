import React, { FC, useState } from 'react';
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
    const [value, setValue] = useState<string>('Type a film or species name');

    const getFilms = async (text: string) => {
        const response = await fetch(`https://swapi.dev/api/films/?search=${text}&format=json`);
        const data = await response.json();
        setFilms(data.results);
    }

    const getAllFilms = async () => {
        const response = await fetch(`https://swapi.dev/api/films/?format=json`);
        const data = await response.json();
        setFilms(data.results); 
    }

    return (
        <div className="Lookup">
            <div className="image">
                <img className="logo" src={require('./img/logo4.png')} />
            </div>
            <div className="bar">
                <input type="text" className="search" value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onClick={() => { setValue("") }}></input>
                <button className="button" onClick={() => { getFilms(value) }} >Search</button>
            </div>
            <div className="content">
                    <Props films={films} />
            </div>
        </div>
    )
}

export default Lookup;