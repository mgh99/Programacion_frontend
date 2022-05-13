import {FC} from 'react';
import "./Styles/Logo.css";

const Logo: FC = () => {
    return (
        <div className = "Logo">
            <img className = "img" src = {require("./img/giphy.gif")}></img>
        </div>
    )
}

export default Logo;