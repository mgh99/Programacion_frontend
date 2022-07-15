import { FC } from "react";
import "../Styles/Modal.css";

export const Modal:FC<{title:string, onClickConfirm:()=>void, onClickCancel:()=>void}> = ({title, onClickCancel, onClickConfirm}) => {
    return(
        <div className="modalBox">
            <h2>{title}</h2>
            <button onClick={onClickCancel}>Cancel</button>
            <button onClick={onClickConfirm}>Confirm</button>
        </div>
    )
}