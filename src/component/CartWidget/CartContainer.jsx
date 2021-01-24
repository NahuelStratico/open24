import {useEffect, useState, useContext}  from 'react';
import {Link} from 'react-router-dom'
import {Store} from '../../store';
import CartProduct from '../CartWidget/CartProduct';


const CartContainer = () => {
  
    const [data, setData]= useContext(Store);
    const [prods, setProds]= useState([]);


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


    return ( 
    <>
        <div className="mb-5">
            <h3 className="text-center mt-5">Detalle de tu compra:</h3>
                {
                    data.items.length ?
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
                    :
                    <>
                    

                    </>
                    
                
                }
        
                <div className="total">
                    <Link to="/checkout">Pagar</Link>   
                    <h3>Total: ${data.total}</h3>
                </div>
        </div>
    </>
    );
}
 
export default CartContainer;