import React, { FC, useState } from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

export const Todo: FC<{todo:string}> = ({todo}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>{todo}</h2>
      <div>
        <button onClick={()=>{setIsOpen(true)}}>Delete</button>
      </div>
      {isOpen && <><Modal onClickCancel={()=>{setIsOpen(false)}} onClickConfirm={()=>{alert("Confirmó!!!")}} title={todo} /><Backdrop onClick={()=>{setIsOpen(false)}}/></>}
    </div>
  );
};
