import {useState, useContext} from 'react';
import {Store} from '../../store';
import './cartWidget.css';

const CounterCartCheck = ({items, counter,stock, precioProducto}) => {
    const [qty, setQty] =useState(counter);
    const [data, setData]=useContext(Store);   

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
                className="btn btn-primary btn-sm"
                >
                    -
                </button>

                <span className="mx-2 font-weight-bold">{qty}</span>

                <button 
                onClick={ () => sumarProducto()}
                className="btn btn-primary btn-sm"
                >
                    +
                </button>
            </div>
        </>

      );
}
 
export default CounterCartCheck;