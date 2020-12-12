import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer'
import ItemCounter from './component/ItemCount'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer titulo="Titulo de mi productos" descripcion="Esta es la descripcion de mi producto" precio="$400"/>
      <ItemCounter strock="5" initial="0"/>
    </>
  );
}

export default App;
