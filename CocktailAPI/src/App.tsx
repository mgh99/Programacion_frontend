import React, {FC} from 'react';
import './App.css';
import Container from "./Componentes/Layout/Container";
import CocktailPrincipal from './Componentes/CocktailPrincipal';
import { url } from 'inspector';

const App: FC = () => {
  return (
    <Container>
      <header>
        <img/>
        </header>
      <CocktailPrincipal/>
      <footer></footer>
    </Container>
  );
}

export default App;
