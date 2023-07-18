import React, { useEffect, useState } from 'react'
//material ui
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
//css
import "./ItemListContainer.css"
//firebase
import { db } from '../../Firebase/FirebaseConfig'
import { collection, query, getDocs, } from "firebase/firestore"
//react router dom
import { Link } from 'react-router-dom';


//Cart
export const ItemListContainer = ({addToCart}) => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            const q = query(collection(db, "products"))
            const docs = []
            const querySnapshot = await getDocs(q)
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            })
            setProducts(docs)
        }
        getProduct()
    }, [])

    const handleAddToCart = (id) => {
        const selectedProduct = products.find((product) => product.id === id);
        if (selectedProduct) {
          addToCart(selectedProduct); 
        }
      };
    
    return (
        <>




            <main className='products'>
                <ul>
                    {
                        products.map(product => (

                            <li key={product.id}>
                                <Link to={`item/${product.id}`}>
                                    <img
                                        src={product.thumbnail}
                                        alt={product.title} />
                                </Link>
                                <div>
                                    <strong className='title'>{product.title}</strong>
                                    <p className='price'>$USD {product.price}</p>
                                </div>

                                <button onClick={ () => handleAddToCart(product.id)}>
                                    <AddShoppingCartIcon />
                                </button>

                            </li>

                        ))
                    }
                </ul>
            </main>
        </>

    )
}



