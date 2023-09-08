import './Nav.css'
//components
import { CartWidget } from '../CartWidget/CartWidget.jsx';
//react router dom
import { Link } from 'react-router-dom';


export function Nav( {cartItems}) {
    return (

        <header className='header'>
            <div className='logo'>
            <Link className='li' to='/'> <img src="/logo_ecommerce.jpg" alt="Logo-Ecommerce" /></Link>
            </div>
            <article className='carrito'>
                <CartWidget cartItems={cartItems} />
            </article>
            <nav >
                <ul className='nav-links'>
                    <Link className='li' to='/'>Inicio</Link>
                    <Link className='li' to='/contact'>Contacto</Link>
                    <Link className='li' to='/about'>About</Link>
                </ul>
            </nav>

        </header>



    )
}