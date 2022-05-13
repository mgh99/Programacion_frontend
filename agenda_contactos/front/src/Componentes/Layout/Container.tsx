import {FC} from 'react';
import "../Styles/Layout.css";

const Container: FC<{children: React.ReactNode}> = ({children}) =>  {
    return (
        <div className = "container">
            {children}
        </div>
    )
}

export default Container;