import {useState, useEffect} from 'react';
import {getFirestore} from '../../firebase/index'
import {Link} from 'react-router-dom'
import ItemListContainer from '../../containers/ItemListContainer'

const PromoProducts = () => {

    const [Promo, setPromo] = useState([]);
    const db = getFirestore();
    useEffect(() => {
        db.collection('productos').where("promo", "==", true).get()
        .then(response => {
            let array = []
            response.forEach(item => {
                array.push({id: item.id, data: item.data()})
            })

            setPromo(array);
        })
    },[])
    return(
        <>
            <div className="container my-4 d-flex flex-column">
                <h2 className="pb-3">Productos destacados</h2>
            {
                    Promo.length ?
                    <>

                        <ul className="container products">
                            {
                                Promo.map((item, index) => (
                                    <li key={index} className="card-ui">
                                        <ItemListContainer 
                                            id={item.id}
                                            img={item.data.img}
                                            titulo={item.data.titulo} 
                                            precio={item.data.precio} 
                                            categoria={item.data.categoria}
                                            descripcion={item.data.descripcion}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </>
                    :
                    <div class="spinner-border text-primary mt-5" role="status">
                        <span class="sr-only">Cargando productos...</span>
                    </div>
        
                }
            </div>
        </>
    )
}

export default PromoProducts