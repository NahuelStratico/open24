import {useState} from 'react';
import {Link} from 'react-router-dom';
import '../navbar/navbar.css';
import logo from '../../../assets/logoOpen.png';
import { IoIosMenu } from "react-icons/io";
import {Sidebar} from './Sidebar';
import CartWidget from '../../CartWidget/CartWidget'

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
       <>
       <header className="header">
            <div className="container">
                <Link to="/" >
                    <img src={logo} alt="Logo 24/7" className="logo"/>
                </Link>

                <div className="nav-container">
                    <nav className="navbar" >
                            <ul className="navbar-content">
                                <li className="navbar-item"><Link to="/" className="navbar-link link">Inicio</Link></li>
                                <li className="navbar-item"><Link to="/category/drugstore" className="navbar-link link">Drugstore</Link></li>
                                <li className="navbar-item"><Link to="/category/heladosydrinks" className="navbar-link link">Helados & Drinks</Link></li>
                                <li className="navbar-item"><Link to="/category/tabaqueriaygrow" className="navbar-link link">Tabaquería & Grow Shop</Link></li>
                                <li className="navbar-item"><Link to="/category/decoyenergetica" className="navbar-link link">Deco & Energética</Link></li>
                                <li className="navbar-item"><Link to="/category/libreriaytecno" className="navbar-link link">Librería & Tecno</Link></li>
                                <li className="navbar-item"><Link to="/category/almacenysnack" className="navbar-link link">Almacén & Snacks</Link></li>
                                <li className="navbar-item"><Link to="/category/jugueteriayrelagos" className="navbar-link link">Juguetería & Regalería</Link></li>
                            </ul>                    
                    </nav>
                    <div className="hamburger-nav">
                        <a href="#" className="menu-bars">
                        <IoIosMenu onClick={showSidebar}/>
                        </a>
                    </div>
                    <CartWidget/>
                </div>
                
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-item" onClick={showSidebar}>
                   {Sidebar.map((item, index) => {
                       return(
                        <li key={index} className={item.cName}>
                            <a href={item.url}>
                                <span>{item.title}</span>
                            </a>
                        </li>
                       )
                   })}
                </ul>
            </div> 
       </header>
       </>
    )
}

export default Navbar