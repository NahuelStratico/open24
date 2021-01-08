
import {useContext} from 'react';
import {Store} from '../store';

const ItemCartContainer = () => {

    const [data, setData] = useContext(Store);

    return(
        <>
        <h3 className="text-center mt-5">Estas en el carrito</h3>

        {
            data.items.map(item => <p>{item.nombre}</p>)
        }
        </>
        
    )
}

export default ItemCartContainer