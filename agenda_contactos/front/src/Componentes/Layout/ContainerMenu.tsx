import { FC } from 'react';
import "../Styles/Layout.css";

const ContainerMenu: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className = "options">
            {children}
        </div>
    )
}

export default ContainerMenu;