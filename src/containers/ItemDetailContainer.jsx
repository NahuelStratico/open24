import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../component/detail/ItemDetail';
import {getFirestore} from '../firebase/index'
import {Link} from 'react-router-dom'


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
            {
                product ?
                <ItemDetail 
                item={product}
                stock={product.stock} />
                :
                <div class="spinner-border text-primary" role="status">
                    <span class="sr-only">Cargand productos...</span>
                </div>
            }
        </>
    )   
}

export default ItemDetailContainer
