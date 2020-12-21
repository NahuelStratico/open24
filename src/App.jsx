import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import ItemDetailContainer from './containers/ItemDetailContainer'



function App() {

  return (
    <>
      <Navbar/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
