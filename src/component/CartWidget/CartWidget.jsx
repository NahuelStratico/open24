import {IoIosCart} from "react-icons/io";
import '../CartWidget/cartWidget.css';
import '../general/navbar/navbar.css';


const CartWidget = () => {
    return(
        <div className="navCart">
            <IoIosCart className="cart"/>
            <span>0</span>
        </div>
    )
}

export default CartWidget