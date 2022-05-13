import react, { FC } from "react";
import "./Styles/CharactersRM.css"

const Header: FC = () => {
    return (
        <div>
            <header>
                <h1 className="heading">Rick <span>And</span> Morty</h1>
            </header>
        </div>
    )
}

export default Header;