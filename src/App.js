import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import MoreDetails from './pages/MoreDetails/MoreDetails';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/MoreDetails/:id" component={ MoreDetails } />
        <Route exact path="/checkout" component={ Checkout } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
