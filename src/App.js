import {Switch, Route} from 'react-router-dom'

import Header from "./components/Header";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="shopping-cart">
      <Header/>
      <Switch> 
        <Route exact path='/'><Products/></Route>
        <Route  path='/cart'><Cart/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
