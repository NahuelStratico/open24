import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../component/ItemDetail';
import {getFirestore} from '../firebase/index'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null); 
    const {itemid} = useParams()
    const db = getFirestore()

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
                item={product} />
                :
                <p>Cargando producto...</p>
            }
        </>
    )   
}

export default ItemDetailContainer
