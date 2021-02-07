import {useState, useEffect} from 'react';
import './category.css';
import ItemListContainer from '../../containers/ItemListContainer';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../../firebase/index';
import {Link} from 'react-router-dom';

const Category = () => {

    const [products, setProducts] = useState([])
    const db = getFirestore();
    const {categoryid} = useParams()

    // Filtro la busqueda por categoria
    useEffect(() => {
        if(categoryid) {
            db.collection('productos').where('categoria', '==', categoryid).get()
            .then(response => {
                let arr = [];
                response.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setProducts(arr);
            })
        }
    },[categoryid])


    return(
        <>  
            <div className="d-flex m-2">
                <Link to = {"/"} className="link_category text-decoration-none px-1">Home</Link> {" > "} 
                <p className="d-block text-muted title_category px-1">{categoryid.split('-').join(' ')}</p>
            </div>
            <div className="container my-4 d-flex flex-column">
                
                {
                    
                   categoryid === undefined ?
                   <h2 className="pb-3">Productos destacados</h2>
                   :
                   <h2 className="mb-3 title_category">{categoryid.split('-').join(' ')}</h2>
                }
                            

                {
                    products.length ?
                    <>
                        
                        <ul className="container products">
                            {
                                products.map((item, index) => (
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

export default Category