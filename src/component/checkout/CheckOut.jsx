import {useState, useContext} from 'react'
import '../CartWidget/cartWidget.css'
import {Store} from '../../store'
import {getFirestore} from '../../firebase/index'
import firebase from 'firebase/app';
import { IoIosCloseCircleOutline } from 'react-icons/io';


const CheckOut = () => {
    const db = getFirestore();
    const [data, setData] = useContext(Store);
    const [venta, setVenta] = useState(false);
    const [idCompra, setIdCompra] = useState('');
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

    const handleSubmitForm = (e) => {
        e.preventDefault()
        db.collection('ventas').add(compra)
        .then(({id}) =>{
            setVenta(true);
            setIdCompra(id)
        }) 
        .catch(e => console.log(e));
    }

    return(
        <div className="container detail-container">
           <div className="detail">
                <h2 className="display-4">Checkout</h2>

                {
                    !venta ?
                    <form className="form-checkout" onSubmit={handleSubmitForm}>
                        <div className="form-group">
                            <input type="email" value={form.email} onChange={handleChangeInput} name="email"className="form-control"  placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="text" value={form.nombre} onChange={handleChangeInput} name="nombre"className="form-control"  placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input type="number" value={form.telefono} onChange={handleChangeInput} name="telefono"className="form-control"  placeholder="Teléfono"/>
                        </div>
                        
                        <button className="btn btn-primary">Confirmar compra</button>
                    </form>:
                    
                    <p>La compra se realizó con éxito, tu número de seguimiento es: {idCompra}</p>
                }
           </div>
        </div>
    )
}

export default CheckOut