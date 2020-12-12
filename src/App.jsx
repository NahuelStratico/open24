import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './component/general/navbar/Navbar'
import ItemCounter from './component/ItemCount'
import FeatureProducts from './component/FeaturedProducts'


function App() {
  return (
    <>
      <Navbar/>
      <FeatureProducts/>
      <ItemCounter strock="5" initial="0"/>
    </>
  );
}

export default App;
