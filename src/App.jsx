import React from 'react';
import Main from './components/Main';
import './assets/style.css';
import { ProductProvider } from './context/ProductContext';
import { LocalProvider } from './context/LocalProvider';

function App() {
  return (
    <div>
      <LocalProvider >
      <ProductProvider >
     <Main />
     </ProductProvider>
     </LocalProvider>
    </div>
  );
}

export default App;
