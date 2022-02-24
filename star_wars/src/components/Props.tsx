import React, { FC, useEffect, useState } from 'react';
import Films from './Films';
import "./styles/Props.css"

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

type IProps = {
    films: IFilmsAPI[];
}

const Props: FC<IProps> = ({ films }) => {

    const [filmsList, setFilmsList] = useState<IFilmsAPI>();

    useEffect(() => {
        setFilmsList(films[0]);
    }, [films]);

    return (
        <div className="Films-info">
            <div className="Info">
                <Films title={filmsList?.title!}
                    episode_id={filmsList?.episode_id!}
                    opening_crawl={filmsList?.opening_crawl!}
                    director={filmsList?.director!}
                    producer={filmsList?.producer!}
                    release_date={filmsList?.release_date!}
                    url={filmsList?.url!}
                    created={filmsList?.created!}
                    edited={filmsList?.created!}>
                </Films>
            </div>
            <div className = "Films-list">
                <ol>
                    {films.map(elem => <li className = "puntos" key = {elem.episode_id} onClick = {() => {
                        setFilmsList(elem);
                    }}>{elem.title}</li>)}
                </ol>
            </div>
        </div>
    )
}

export default Props;