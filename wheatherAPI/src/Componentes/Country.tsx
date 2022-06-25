import React, { FC, useState, useEffect } from 'react';
import {CountryProps, ICountry, WeatherAPI, Coord, Weather, Main, Wind, Clouds, Sys} from '../Componentes/Types/Types';
import {QUERY_COUNTRY} from '../Componentes/Types/Query';
import {useQuery} from '@apollo/client';
import axios from 'axios';
import styled from "@emotion/styled";
import ClipLoader from "react-spinners/ClipLoader";

const Country: FC<CountryProps> = (props) => {

    const {data, loading, error} = useQuery<ICountry>(QUERY_COUNTRY, 
        {variables: {name: props.name}
    });

    const [index, setIndex] = useState<number>(-1);
    const [dataWeather, setDataWeather] = useState<WeatherAPI>({} as WeatherAPI);

    useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat=" + data?.countries[index].capital.location.lat + 
        "&lon=" + data?.countries[index].capital.location.long + "&appid=" + 
        process.env.REACT_APP_OPEN_WEATHER_API_KEY).then((results) => {
            setDataWeather(results.data);
        })
    }, [index]);

    return(
        <div>
            {loading && <ClipLoader color = "blue"/>}
            {error && <div>{error.message}</div>}

            {data && data.countries.map((country, index_country) => {
                if(index === index_country) {

                    return(
                        <div>
                            <div onClick={() => {
                                setIndex(index);
                            }}>{country.name}</div>
                            <div>Continent:{" "}{country.continent.name}</div>
                            <div onClick={() => {
                                props.changeFilter(country.capital.name, false);
                            }}>Capital: {" "}{country.capital.name}</div>
                            <div>Currencies: {" "}{country.currencies.map((currency) => {
                                return(
                                    <div>{currency.name}</div>
                                )
                            }
                            )}</div>
                            <div>Languages: {" "}{country.languages.map((language) => {
                                return(
                                    <div>{language.name}</div>
                                )
                            }
                            )}</div>
                            <div>Population: {" "}{country.population}</div>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <div onClick={() => {
                                setIndex(index_country)
                            }}>{country.name}</div>
                        </div>
                    )
                }
            })}

            {index !== -1 && 
                <div>
                    <div onClick={() => setIndex(-1)}>X</div>
                    <div><img src = {"https://www.country.flags.io/" + data?.countries[index].alpha2Code + "/flat/64.png"}></img></div>
                    <div>
                        <div>Continent: {data?.countries[index].continent.name}</div>
                        <div>Name: {data?.countries[index].name}</div>
                        <div>Code: {data?.countries[index].alpha2Code}</div>
                        <div>Population: {data?.countries[index].population}</div>
                        <div onClick={() => {
                            props.changeFilter(data?.countries[index].capital.name, false);
                        }}>Capital: {data?.countries[index].capital.name}</div>

                        {data?.countries[index].languages && data.countries[index].languages.map((language, index) => {
                            return(
                                <div>Language: {index}: {language.name}</div>
                            )
                        })}
                        {data?.countries[index].currencies && data.countries[index].currencies.map((currency, index) => {
                            return(
                                <div>Currency: {index}: {currency.name}</div>
                            )
                        })}
                        {dataWeather && 
                        <div>
                            <div>Weather description: {dataWeather.weather[0].description}</div>
                            <div>Time: {(dataWeather.main.temp - 273.15)}ºC</div>
                            <div>Time USA: {((dataWeather.main.temp - 273.15) * (9/5) + 32)}ºF</div>
                        </div>
                            }
                    </div>
                </div>
            }

        </div>
    )


}

export default Country;