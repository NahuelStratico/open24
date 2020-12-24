import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Home from './component/home/Home'
import Drugstore from './component/drugstore/Drugstore'


function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/drugstore">
          <Drugstore/>
        </Route>
      </Switch>    
    </BrowserRouter>
  );
}

export default App;
