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
        <div className="Content-films">
            <div>
                <ol id="info-list">
                    {films.map(elem => <li className="puntos" key={elem.episode_id} onClick={() => {
                        setFilmsList(elem);
                    }}>{elem.title}</li>)}
                </ol>
            </div>
            <div className="Info">
                <Films title={filmsList?.title!}
                    episode_id={filmsList?.episode_id!}
                    opening_crawl={filmsList?.opening_crawl!}
                    director={filmsList?.director!}
                    producer={filmsList?.producer!}
                    release_date={filmsList?.release_date!}
                    url={filmsList?.url!}>
                </Films>
            </div>
            <div className = "music">
                <div id = "music-content">
                    <object width="420" height="315">
                        <param name="movie" value="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"></param>
                        <param name="allowFullScreen" value="true"></param>
                        <param name="allowscriptaccess" value="always"></param>
                        <embed src="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2" id = "button-music" type="application/x-shockwave-flash" width="420" height="315" ></embed>
                    </object>
                </div>
            </div>
        </div>

    )
}

export default Props;