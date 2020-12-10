import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer'


function App() {
  return (
    <>
      <Navbar/>
      <ItemListContainer titulo="Titulo de mi productos" descripcion="Esta es la descripcion de mi producto" precio="$400"/>
    </>
  );
}

export default App;
