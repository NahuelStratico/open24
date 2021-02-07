import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../component/detail/ItemDetail';
import {getFirestore} from '../firebase/index';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null); 
    const {itemid} = useParams()
    const db = getFirestore()

    // Traigo de la base de datos el detalle de los productos por ID
    const getProductsDB = () => {
        db.collection('productos').doc(itemid).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
         .catch(e => console.log(e));
     }

     useEffect(() => {
        getProductsDB()
     }, []);

    
    return(
        <>
            <div className="container">
                {
                    product ?
                    <ItemDetail 
                    item={product}
                    stock={product.stock} />
                    :
                    <div class="spinner-border text-primary mt-5" role="status">
                        <span class="sr-only">Cargand productos...</span>
                    </div>
                }
            </div>
        </>
    )   
}

export default ItemDetailContainer
