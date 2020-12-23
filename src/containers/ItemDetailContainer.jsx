import {useState, useEffect} from 'react';
import ItemDetail from '../component/ItemDetail';


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id:1,
                nombre: 'Producto 1',
                img:'http://placehold.it/350x400',
                description:'Este es un producto de pueba',
                precio:500
            })
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
                <ItemDetail item={product}/>
                :
                <p>Cargando producto...</p>
            }
        </>
    )   
}

export default ItemDetailContainer
