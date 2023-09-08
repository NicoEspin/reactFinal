import "./ItemDetailPage.css";
import React, { useState, useEffect } from "react";
//material ui
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
//Firebase
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../Firebase/FirebaseConfig";
//react router dom
import { useParams } from "react-router-dom";

export const ItemDetailPage = ({ addToCart }) => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductData(docs);
    };
    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    const selectedProduct = productData.find((product) => product.id === id);
    if (selectedProduct) {
      addToCart(selectedProduct);
    }
  };

  return (
    <div className="product">
      {productData.map((product) => {
        return (
          <div key={product}>
            <h3>{product.title}</h3>
            <p>$USD {product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>

            <button onClick={handleAddToCart}>
              <AddShoppingCartIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
};
