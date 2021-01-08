import {useContext} from 'react';
import {IoIosCart} from "react-icons/io";
import '../CartWidget/cartWidget.css';
import '../general/navbar/navbar.css';
import {Store} from '../../store'


const CartWidget = () => {

    const [data, setData] = useContext(Store);

    

    return(
        <div className="navCart">
            <IoIosCart className="cart"/>
            <span>{data.cantidad}</span>
        </div>
    )
}

export default CartWidget