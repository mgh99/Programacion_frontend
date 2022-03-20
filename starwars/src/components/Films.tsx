import React, { FC } from 'react';
import "./styles/Films.css";

type IFilms = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    url: string;
}

const Films: FC<IFilms> = ({ title, episode_id, opening_crawl, director, producer,
    release_date, url }) => {
    return (
        <div className="details-films">
            <div id="text-films">
                <h1>{title}</h1>
                <h2 id="cursiva">Director:   {director}</h2>
                <h2 id="cursiva">Producer:   {producer}</h2>
                <h3>Release date: {release_date}</h3>
                <h3>{opening_crawl}</h3>
            </div>
        </div>
    )
}


export default Films;