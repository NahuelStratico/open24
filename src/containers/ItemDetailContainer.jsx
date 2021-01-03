import {useState, useEffect} from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {listaProductos} from '../assets/listaProductos';
import ItemDetail from '../component/ItemDetail';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null); 

    const {itemid} = useParams()

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            const productoClickeado = listaProductos.find( producto => producto.id == itemid)
            resolve(productoClickeado)
        }, 1000);
    })

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(err => console.log(err));
    }, []);

    


    return(
        <>
            {
                product ?
                <ItemDetail item={product} />
                :
                <p>Cargando producto...</p>
            }
        </>
    )   
}

export default ItemDetailContainer
