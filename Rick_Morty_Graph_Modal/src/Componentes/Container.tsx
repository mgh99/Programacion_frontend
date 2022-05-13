import react, { FC } from "react";
import "./Styles/Container.css";

const Container: FC = ({ children }) => {
    return (
        <div className = "container">
            {children}
        </div>
    )
}

export default Container;