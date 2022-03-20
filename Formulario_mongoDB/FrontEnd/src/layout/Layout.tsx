import React, { FC } from "react";
//import "./styles/Layout.css"

const Layout: FC = ({children}) => {
    return (
        <div className="loyi">
            {children}
        </div>
    )
}

export default Layout;