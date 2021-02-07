import {useEffect, useState, useContext}  from 'react';
import {Link} from 'react-router-dom'
import {Store} from '../../store';
import CartProduct from '../CartWidget/CartProduct';


const CartContainer = () => {
  
    const [data, setData]= useContext(Store);
    const [prods, setProds]= useState([]);

    // Agregar al localstorage los productos
    useEffect(() => {
        if(data.items.length){
            const productos=JSON.stringify(data.items);
            localStorage.setItem('productos', productos);
        }

        if(localStorage.getItem('productos')) {
            console.log(JSON.parse(localStorage.getItem('productos')))
            setProds(JSON.parse(localStorage.getItem('productos')));
        } else {
            setProds(data.items);
        }
  
      }, [data.items])



    if(data.cantidad === 0){
    return <div className="cart-empty">
                <h2>Carrito vacio</h2>
            </div> 
    }else{

        return ( 
        <>
            <div className="mb-5">
                <h3 className="text-center mt-5">Detalle de tu compra:</h3>
                <div className="container mt-5">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Producto</th>
                                <th scope="col">cantidad</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Precio</th>
                                <th className="has-text-cremita is-narrow quit">Quitar</th>
                            </tr>
                        </thead>
                        <tbody>
                    {
                        data.items.map((item)=>
                        <>
                            <CartProduct 
                                items={item} 
                                key={item.id} 
                                id={item.id} 
                                img={item.img} 
                                titulo={item.titulo} 
                                precio={item.precio} 
                                pedidos={item.pedidos}
                                descripcion={item.descripcion}
                            />
                        </>
                        )
                    }

                        </tbody>
                    </table>
                </div>
            
                    <div className="total">
                        <Link to="/checkout">Pagar</Link>   
                        <h3>Total: ${data.total}</h3>
                    </div>
            </div>
        </>
        );
    }
}
 
export default CartContainer;