import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import MoreDetails from './pages/MoreDetails/MoreDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/MoreDetails/:id" component={ MoreDetails } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
