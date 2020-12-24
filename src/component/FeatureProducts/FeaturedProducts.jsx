import {useState, useEffect} from 'react'
import '../FeatureProducts/featureProducts.css'
import ItemListContainer from '../../containers/ItemListContainer'

const FeatureProducts = () => {

    const [products, setProducts] = useState([])

    // Simulando API
    const productos = [
        {
            id:1,
            titulo: 'Producto1',
            precio: 500

        },
        {
            id:2,
            titulo: 'Producto2',
            precio: 1400
        },
        {
            id:3,
            titulo: 'Producto3',
            precio: 100
        }
    ]

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(productos);
        }, 2000)
    })

    useEffect(() => {
        getProducts.then( res => setProducts(res))
    },[])



    return(
        <>
            <div className="container my-4 d-flex flex-column">

                {
                    products.length ?
                    <>

                        <h2 className="pb-3">Productos destacados</h2>

                        <ul className="container products">
                            {
                                products.map((item, index) => (
                                    <li key={index}>
                                        <ItemListContainer 
                                            titulo={item.titulo}
                                            precio={item.precio}
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