import {useState} from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/general/navbar/Navbar';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './component/home/Home';
import ItemDetailContainer from './containers/ItemDetailContainer';
import {Store} from '../src/store/index';
import CheckOut from './component/checkout/CheckOut';
import Category from './component/Category/Category';
import CartContainer from './component/CartWidget/CartContainer';
import Error404 from './component/general/error404/Error404';
import Footer from './component/general/footer/Footer';


function App() {
  // Defino mi Context
  const [data, setData] = useState({
    items:[],
    cantidad:0,
    total:0
  })

  return (

    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/category/:categoryid">
            <Category />
          </Route>
          <Route exact path="/item/:itemid">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <CartContainer/>
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="*">
            <Error404 />
          </Route>
        </Switch>    
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
