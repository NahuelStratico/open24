import {useState, useContext, useEffect} from 'react'
import '../CartWidget/cartWidget.css'
import {Store} from '../../store'
import {getFirestore} from '../../firebase/index'
import firebase from 'firebase/app';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form";


const CheckOut = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, setVenta] = useState(false);
    const [idCompra, setIdCompra] = useState('');
    const { register, errors, handleSubmit } = useForm();
    const [form, setForm] = useState({
        email:'',
        nombre: '',
        telefono:''
    })

    const handleChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const compra = {
        usuario: form,
        item: data.items,
        precioTotal: data.total,
        fecha: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    // handleSubmitForm

    // Envio el formulario
    const onSubmit = () => {
        db.collection('ventas').add(compra)
        .then(({id}) =>{
            setVenta(true);
            setIdCompra(id)
            setData({
                items:[],
                cantidad:0,
                total:0
            })
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: `La compra se realizó con éxito, tu número de seguimiento es: ${id}`,
            })
            
        }) 
        .catch(e => console.log(e));
    }

    return(
        <div className="container detail-container">
           <div className="detail">
                <h2 className="display-4">Checkout</h2>

                {
                    !venta ?
                    <form className="form-checkout" onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-group">
                            <input 
                                type="email" 
                                value={form.email} 
                                onChange={handleChangeInput} 
                                name="email"
                                ref={
                                    register({
                                        required:{value:true, message: 'El email es obligatorio para completar tu compra.'}
                                    })
                                }
                                className="form-control"  
                                placeholder="Email"
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.email?.message}
                            </span>
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                value={form.nombre} 
                                onChange={handleChangeInput} 
                                name="nombre"
                                ref={
                                    register({
                                        required:{value:true,message: 'Tu nombre es obligatorio para completar tu compra.'}
                                    })
                                }
                                className="form-control"  
                                placeholder="Nombre"
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.nombre?.message}
                            </span>
                        </div>
                        <div className="form-group">
                            <input 
                                type="number" 
                                value={form.telefono} 
                                onChange={handleChangeInput} 
                                name="telefono"
                                ref={
                                    register({
                                        required:{value:true, message: 'El teléfono es obligatorio para completar tu compra.'}
                                    })
                                }
                                className="form-control"  
                                placeholder="Teléfono"
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.telefono?.message}
                            </span>
                        </div>
                        {
                            data.cantidad > 0 ?
                            <button className="btn btn-primary btn-block">Confirmar compra</button>
                            :
                            <div className="d-flex flex-column">
                                <button className="btn btn-danger" disabled>No compraste ningun producto</button>
                                <Link to= "/">Ir a home</Link>
                            </div>
                        }
                        
                    </form>
                    :
                    <p>Gracias por tu compra</p>
                }
           </div>
        </div>
    )
}

export default CheckOut