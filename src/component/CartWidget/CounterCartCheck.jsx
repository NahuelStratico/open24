import {useState, useContext} from 'react';
import {Store} from '../../store';

const CounterCartCheck = ({items, counter,setCounter,pedidos,stock, setPrecioProducto, precioProducto}) => {
    const [qty, setQty] =useState(counter);
    const [data, setData]=useContext(Store);   

    console.log(qty);

    // Resta la cantidad de pedidos sobre cada producto
    const restarProducto = () => {
        items.pedidos= items.pedidos-1;
        if(qty>0) {
            setQty(qty - 1);
            setData({ 
                ...data, 
                cantidad: data.cantidad-1,
                total: data.total - precioProducto
            });
        }  
        console.log(data.total)
    }
  
    // Suma la cantidad de pedidos sobre cada producto
    function sumarProducto(){
        items.pedidos= items.pedidos+=1;
        if(qty<stock) {
            setQty(qty+1);
            setData({ 
                ...data, 
                cantidad: data.cantidad+1,
                total: data.total + precioProducto
            });
        }
    }


    return (
        <>
            <div className="conter-container">
                <button 
                disabled={qty===1 ? 'disabled' : null }   
                onClick={ () => restarProducto()}
                className="">-</button>
                <span>{qty}</span>
                <button onClick={ () => sumarProducto()}>+</button>
            </div>
        </>

      );
}
 
export default CounterCartCheck;