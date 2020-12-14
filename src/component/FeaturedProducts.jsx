import '../component/featureProducts.css'
import ItemListContainer from '../containers/ItemListContainer'

const FeatureProducts = () => {

    return(
        <>
            <div className="container my-4 d-flex flex-column">
                <h2 className="pb-3">Productos destacados</h2>

                <ul className="container products">
                    <li><ItemListContainer titulo="Titulo producto" precio="$400" stock="5" /></li>
                    <li><ItemListContainer titulo="Titulo producto" precio="$300" stock="4" /></li>
                </ul>
            </div>
        </>
     
    )
}

export default FeatureProducts