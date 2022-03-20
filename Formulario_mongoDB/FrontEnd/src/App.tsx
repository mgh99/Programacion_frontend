import React, { FC, useEffect, useState } from 'react';
import { Padre } from './components/Padre';
import Layout from './layout/Layout';
// es una representación del html en Type

const App:FC =() => { 
  return (
      <Layout>
        <Padre/>
      </Layout>
  );
}

export default App;
