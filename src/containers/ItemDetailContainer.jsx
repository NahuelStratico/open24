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

    // Funcion que retorna al carrito
    const addCart = () => {
        console.log('agregado al carrito');
        return <Redirect to="/cart" />
    }

    return(
        <>
            {
                product ?
                <ItemDetail item={product} action={addCart}/>
                :
                <p>Cargando producto...</p>
            }
        </>
    )   
}

export default ItemDetailContainer
