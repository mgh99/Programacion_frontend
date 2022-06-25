export type CountryProps = {
    name: string;
    changeFilter: Function;
}

export type ICountry = {
    countries: Array<{
        continent: {
            name: string
        },
        capital: {
            name: string,
            location: {
                lat: number,
                long: number,
            }
        },
        currencies: Array<{
            name: string,
        }>,
        population: number,
        languages: Array<{
            name: string,
        }>,
        name: string,
        alpha2Code: string,
    }>;
}

export type WeatherAPI = {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export type Coord = {
    lon: number;
    lat: number;
}

export type Weather = {
    id: number; 
    main: string;
    description: string;
    icon: string;
}

export type Main = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export type Wind = {
    speed: number;
    deg: number;
}

export type Clouds = {
    all: number;
}

export type Sys = {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export type CityProps = {
    name: string;
    changeFilter: Function;
}

export type ICity = {
    cities: Array<{
        name: string,
        population: number,
        location: {
            lat: number,
            long: number,
        }
        country: {
            name: string,
            alpha2Code: string,
        }
        timeZone: {
            name: string,
        }
    }>;
}

export type InputTextProps = {
    changeFilter: Function,
}

