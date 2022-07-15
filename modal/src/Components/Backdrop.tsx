import { FC } from "react"
import "../Styles/Backdrop.css"

export const Backdrop :FC<{onClick:()=>void}>=({onClick})=>{
    return(
        <div className="backdrop" onClick={onClick}/>
    )
}