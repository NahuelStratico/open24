import {useState, useEffect} from 'react'
import '../FeatureProducts/featureProducts.css'
import {listaProductos} from '../../assets/listaProductos'
import ItemListContainer from '../../containers/ItemListContainer'
import {useParams} from 'react-router-dom';

const FeatureProducts = () => {

    const [products, setProducts] = useState([])

    const {categoryid} = useParams()

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(listaProductos);
        }, 500)
    })

    useEffect(() => {
        getProducts.then( res => {
            if(categoryid){
                const productoCategory = res.filter( producto => producto.categoria === categoryid)
                setProducts(productoCategory)
            }else{
                setProducts(res)
            }
        })
    },[categoryid])



    return(
        <>
            <div className="container my-4 d-flex flex-column">

                {
                    products.length ?
                    <>

                        
                        <h2 className="pb-3">{categoryid}</h2>
                        
                        
                        <ul className="container products">
                            {
                                products.map((item, index) => (
                                    <li key={index} className="card-ui">
                                        <ItemListContainer 
                                            item={item}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                    :
                    <div class="spinner-border text-primary mt-5" role="status">
                        <span class="sr-only">Cargando productos...</span>
                    </div>
        
                }
               
            </div>
        </>
     
    )
}

export default FeatureProducts