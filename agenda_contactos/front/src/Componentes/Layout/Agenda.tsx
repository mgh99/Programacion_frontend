import { FC } from 'react';
import "../Styles/Layout.css";

const Agenda: FC<{children: React.ReactNode}> = ({children}) =>  {
    return (
        <div className = "agenda">
            {children}
        </div>
    )
}

export default Agenda;