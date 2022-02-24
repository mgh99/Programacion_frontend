import React, {FC} from 'react';
import "./styles/Films.css";

type IFilms = {
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

const Films: FC<IFilms> = ({title, episode_id, opening_crawl, director, producer,
                            release_date, url, created, edited }) => {
    return (
        <div className = "details-films">
            <h1>{title}</h1><br/>
            <h2>Director: <h2 id = "cursiva">{director}</h2></h2><br/>
            <h2>Producer: <h2 id = "cursiva">{producer}</h2></h2><br/><br/>
            <h3>Release date: {release_date}</h3><br/><br/>
            <h3>Opening crawl: {opening_crawl}</h3><br/>
            <h3>Created: {created}</h3><br/>
            <h3>Edited: {edited}</h3><br/>
        </div>
    )
}

export default Films;