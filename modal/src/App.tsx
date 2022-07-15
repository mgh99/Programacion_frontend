import React, { FC } from "react";
import "./Styles/App.css";
import { Todo } from "./Components/Todo";
import { Modal } from "./Components/Modal";
import { Backdrop } from "./Components/Backdrop";

export const App: FC = () => {
  return (
    <div>
      <Todo todo="Cosilla"/>
      <Todo todo="Cosita"/>
      <Todo todo="Cosina"/>
    </div>
  );
};
