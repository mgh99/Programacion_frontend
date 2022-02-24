import React, { FC } from 'react';
import './App.css';
import Containers from './components/Containers';
import Lookup from './components/Lookup';


const App: FC = () => {

  return (
    <Containers>
      <Lookup></Lookup>
    </Containers>
  );
}

export default App;
