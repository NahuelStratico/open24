import {useState} from 'react'
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Home from './component/home/Home'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemCartContainer from './containers/ItemCartContainer'
import {Store} from '../src/store/index'
import CheckOut from './component/CartWidget/CheckOut'
import Category from './component/Category/Category'


function App() {

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
          <ItemCartContainer/>
        </Route>
        <Route>
          <CheckOut exact path="/checkout"/>
        </Route>
      </Switch>    
    </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
