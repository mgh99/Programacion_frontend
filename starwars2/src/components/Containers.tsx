import React, {FC} from "react";
import "./styles/Containers.css";

const Containers: FC = ({children}) => {

    return (
        <div className = "containers">
            {children}
        </div>
    )
}

export default Containers;