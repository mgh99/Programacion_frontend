import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cocktails from './components/Cocktails';
import Lookup from './components/Lookup';
import Layout from './components/Layout';


function App() {
  return (
    <div>
      <Layout>
        <Lookup />
      </Layout>
    </div>
  );
}

export default App;
