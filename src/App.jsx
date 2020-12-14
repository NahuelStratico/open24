import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import ItemListContainer from './containers/ItemListContainer'
import FeatureProducts from './component/FeaturedProducts'



function App() {

  return (
    <>
      <Navbar/>
      <FeatureProducts/>
    </>
  );
}

export default App;
