import React, { useState } from 'react'
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartContextProvider from './Components/Context/CartContextProvider';
function App() {
  const [shown , SetShown] = useState(false)

  const ChangeShown = ()=>{
    SetShown(!shown)
  }

  return (
    <CartContextProvider>
    <Header SetBooL={ChangeShown} />
    <main>
    <Meals />
    </main>
    <Cart BooL={shown} SetBooL={ChangeShown} />
    </CartContextProvider>
  );
}

export default App;
