import {useState, useContext} from 'react';
import {Store} from '../../store';
import Swal from 'sweetalert2';
import CounterCartCheck from './CounterCartCheck';
import './cartWidget.css'


const CartProduct = ({items, id, img, titulo, precio, pedidos}) => {

    const [counter, setCounter]= useState(pedidos);
    const [data, setData]= useContext(Store);
    const [precioProducto,setPrecioProducto]= useState(precio);

  
    // Funcion eliminar item del carrito
    const deleteItem = id => {
        const prod = data.items.find((prod) => prod.id === id);

        Swal.fire({
            title: '¿Querés eliminar el producto del carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Producto eliminado con éxito',
                showConfirmButton: false,
                timer: 1500
                }
              )
              data.items.forEach((item, index) => {
                if(item.id === id) {
                    data.items.splice(index, 1)
                }
                })
                setData({...data,
                    cantidad: data.cantidad - prod.pedidos,
                    items: [...data.items],
                    total: data.total - (prod.precio * prod.pedidos)
                });
            }
          })
    }


    return (
        <>  
            <tr>
                <th scope="row"><img src={`../../../products/${img}`} alt={titulo} className="img_detail-checkout"/></th>
                <td class="title_category">{titulo}</td>
                <td>
                    <CounterCartCheck
                    key={items.id}
                    items={items}
                    counter={counter}
                    setCounter={setCounter}
                    pedidos={pedidos}
                    stock={items.stock}
                    setPrecioProducto={setPrecioProducto}
                    precioProducto={items.precio}
                    />
                </td>
                <td class="title_category">{items.categoria.split('-').join(' ')}</td>
                <td className="font-weight-bold">$ {precioProducto*items.pedidos}</td>
                <td  onClick={() => deleteItem(id)} className="quit"> 
                <span className="quit_icon">x</span>  
                </td> 
            </tr>

        </>
      );
}
 
export default CartProduct;