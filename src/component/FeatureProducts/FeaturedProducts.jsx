import {useState, useEffect} from 'react';
import '../FeatureProducts/featureProducts.css';
// import {listaProductos} from '../../assets/listaProductos'
import ItemListContainer from '../../containers/ItemListContainer';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase/index';

const FeatureProducts = () => {

    const [products, setProducts] = useState([])
    const db = getFirestore();

    const {categoryid} = useParams()

    // const getProductsFromDB = () => {
    //     db.collection('productos').get()
    //     .then(docs => {
    //         let arr = [];
    //         docs.forEach(doc => {
    //             arr.push({id: doc.id, data: doc.data()})
    //         })

    //         setProducts(arr)
    //     })
    //     .catch(e => console.log(e));
    // }

    // const getProducts = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         resolve(listaProductos);
    //     }, 500)
    // })

    useEffect(() => {
        // getProductsFromDB();
        // getProducts.then( res => {
        //     if(categoryid){
        //         const productoCategory = res.filter( producto => producto.categoria === categoryid)
        //         setProducts(productoCategory)
        //     }else{
        //         setProducts(res)
        //     }
        // })
        if(categoryid) {
            db.collection('productos').where('categoria', '==', categoryid).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setProducts(arr);
            })
        }
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
                                            id={item.id}
                                            img={item.data.img}
                                            titulo={item.data.titulo} 
                                            precio={item.data.precio} 
                                            categoria={item.data.categoria}
                                            descripcion={item.data.descripcion}
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