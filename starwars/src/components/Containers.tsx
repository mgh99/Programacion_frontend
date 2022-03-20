import React, { FC, useState } from "react";
import Films from "./Films";
import "./styles/Containers.css";

const Containers: FC = ({ children }) => {

    return (
        <div className="containers">
            {children}
        </div>
    )
}

export default Containers;