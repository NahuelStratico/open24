import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Home from './component/home/Home'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemCartContainer from './containers/ItemCartContainer'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/category/:categoryid">
          <Home/>
        </Route>
        <Route exact path="/item/:itemid">
          <ItemDetailContainer/>
        </Route>
        <Route exact path="/cart">
          <ItemCartContainer/>
        </Route>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
