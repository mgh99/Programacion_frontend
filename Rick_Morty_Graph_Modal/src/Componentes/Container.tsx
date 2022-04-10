import react, { FC } from "react";
import "./Styles/Container.css";

const Container: FC = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Container;