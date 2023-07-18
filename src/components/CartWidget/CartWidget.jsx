import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
export function CartWidget({cartItems}) {

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
    return (
        <>
            <article>
                <Link to='/cart'>
                    <div className='carrito'>
                        <ShoppingCartIcon />
                    </div>
                </Link>
            </article>
            <p className='quantity'>{totalItemsInCart}</p>
        </>
    )
}
