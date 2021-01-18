import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
// import {listaProductos} from '../assets/listaProductos';
import ItemDetail from '../component/ItemDetail';
import {getFirestore} from '../firebase/index'


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null); 
    const {itemid} = useParams()
    const db = getFirestore()

    const getProductsFromDB = () => {
        db.collection('productos').doc(itemid).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
         .catch(e => console.log(e));
     }

    // const getProduct = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         const productoClickeado = listaProductos.find( producto => producto.id == itemid)
    //         resolve(productoClickeado)
    //     }, 1000);
    // })

     useEffect(() => {
        getProductsFromDB()
    //     getProduct
    //     .then(response => setProduct(response))
    //     .catch(err => console.log(err));
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
