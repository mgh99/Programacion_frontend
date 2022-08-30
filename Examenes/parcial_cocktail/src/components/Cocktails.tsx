import React, { FC, useEffect, useState } from 'react';
import { cocktailsAPI, list } from './Types';
import Buscador from './Buscador';

enum VISTAS {
    DETALLE = "detalle",
    ARRAY = "array"
}

type inputBuscador = {
    setText: (text: string) => void;
}

type inputList = {
    list: list;
}

const Cocktails: FC<inputList> = ({ list }) => {

    const [vista, setVista] = useState<VISTAS>(VISTAS.ARRAY);
    const [info, setInfo] = useState<cocktailsAPI | undefined>(undefined);

    useEffect(() => {
        setInfo(undefined);
    }, [list]);

    return (
        <div>
            <div>
                {list.drinks.indexOf(info as cocktailsAPI) !== 0 &&
                    <a className="boton1" href="javascript:;" onClick={() => setInfo(list.drinks[list.drinks.indexOf(info as cocktailsAPI) - 1])}>
                    </a>
                }
                <div>
                    <img className="imgCocktail2" src={(info as cocktailsAPI).strDrinkThumb} height="100%" width="100%" />
                </div>
                
                </div>

                {list.drinks.indexOf(info as cocktailsAPI) !== list.drinks.length - 1 &&
                    <a className="boton2" href="javascript:;"
                        onClick={() => setInfo(list.drinks[list.drinks.indexOf(info as cocktailsAPI) + 1])}>
                    </a>
                }
            </div>
        
    )
}

export default Cocktails;

