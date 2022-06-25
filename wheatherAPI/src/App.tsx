import React, { FC, useState } from 'react';
import './App.css';
import Cities from './Componentes/Cities';
import Country from './Componentes/Country';
import Main from './Componentes/Main';

const App: FC = () => {

  const [searchName, setSearchName] = useState<string>("");
  const [type, setType] = useState<boolean>(false);
  const setAll = (name: string, isCountry: boolean) => {
    setSearchName(name);
    setType(isCountry);
  }

  return (
    <div>
      {searchName === "" &&
        <Main changeFilter={setAll} />}

      {searchName !== "" &&
        <div>
          <div onClick={() => {
            setSearchName("");
            setType(false);
          }}>
            <div className="image"></div>
            <div>Click to restart the search</div>
          </div>

          {!type && <Cities name={searchName} changeFilter={setAll} />}
          {type && <Country name={searchName} changeFilter={setAll} />}
        </div>}
    </div>
  )
}

export default App;
