import React, { FC, useState } from 'react';
import { InputTextProps } from '../Componentes/Types/Types';

const Main: FC<InputTextProps> = (props) => {

    const [searchName, setSearchName] = useState<string>("");
    const [type, setType] = useState<boolean>(false);

    return (
        <div>
            <div>
                <input placeholder="Enter a name to continue" type="text" onChange={(elem) => {
                    setSearchName(elem.target.value);
                }}></input>
                <button onClick={() => {
                    props.changeFilter(searchName, type);
                }}>Search</button>
            </div>
            <div>
                {!type && "✔"}
                <div onClick={() => {
                    setType(false);
                }}>City</div>
                {type && "✔"}
                <div onClick={() => {
                    setType(true);
                }}>Country</div>
            </div>
        </div>
    );
};

export default Main;
