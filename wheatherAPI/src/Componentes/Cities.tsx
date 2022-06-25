import React, { FC, useState, useEffect } from 'react';
import { CityProps, ICity, WeatherAPI, Coord, Weather, Main, Wind, Clouds, Sys } from '../Componentes/Types/Types';
import { QUERY_CITY } from '../Componentes/Types/Query';
import { useQuery } from '@apollo/client';
import axios from 'axios';
import styled from "@emotion/styled";
import ClipLoader from "react-spinners/ClipLoader";

const Cities: FC<CityProps> = (props) => {

    const { data, loading, error } = useQuery<ICity>(QUERY_CITY, { variables: { name: props.name } });
    const [index, setIndex] = useState<number>(-1);
    const [dataWeather, setDataWeather] = useState<WeatherAPI>({} as WeatherAPI);

    useEffect(() => {
        if (index !== -1) {
            axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + data?.cities[index].location.lat +
                "&lon=" + data?.cities[index].location.long + "&appid=" + process.env.REACT_APP_KEY).then((results) => {
                    setDataWeather(results.data);
                    console.log(results.data);
                })
        }
    }, [index]);

    return (
        <div>
            {loading && <ClipLoader color="blue" />}
            {error && <div>{error.message}</div>}

            {data && data.cities.map((city, index_city) => {
                if (index === index_city) {
                    return (
                        <div>
                            <div onClick={() => {
                                setIndex(index);
                            }
                            }>{city.name}</div>
                            <div onClick={() => {
                                props.changeFilter(city.country.name, true)
                            }}>Country: {city.country.name}</div>
                            <div>Population: {city.population}</div>
                            {city.timeZone && <div>TimeZone: {city.timeZone.name}</div>}
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <div onClick={() => {
                                setIndex(index_city);
                            }}>{city.name}</div>
                        </div>
                    )
                }
            })}

            {index !== -1 &&
                <div>
                    <div onClick={() => setIndex(-1)}>X</div>
                    <div>
                        <div><img src={"https://www.countryflags.io/" + data?.cities[index].country.alpha2Code + "/flat/64.png"}></img></div>
                        <div onClick={() => {
                            props.changeFilter(data?.cities[index].country.name, true);
                        }}>Country: {data?.cities[index].country.name}</div>
                        <div >Population: {data?.cities[index].population} </div>

                        {data?.cities[index].timeZone && <div>Time zone: {data.cities[index].timeZone.name}</div>}
                        {dataWeather &&
                            <div>
                                <br />
                                <div>Weather description: {dataWeather.weather[0].description}</div>
                                <div>Time: {(dataWeather.main.temp - 273.15)}ºC</div>
                                <div>Time USA: {((dataWeather.main.temp - 273.15) * (9 / 5) + 32)}ºF</div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div >
    )
};

export default Cities;