import { useState, useEffect } from "react";
import "./CartPage.css";
//firebase
import { db } from "../../Firebase/FirebaseConfig";
import { collection, addDoc } from "firebase/firestore";
//material ui
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//sweet alert
import Swal from "sweetalert2";
//react router dom
import { Link } from "react-router-dom";

export const CartPage = ({ cartItems, handleQuantityChange, setCartItems }) => {
  //Formulario de compra
  const showContactForm = () => {
    Swal.fire({
      title: "Completa tus datos de contacto",
      html: `
        <form id="contact-form">
          <input id="swal-input1" class="swal2-input" placeholder="Nombre" name="name" required>
          <input id="swal-input2" class="swal2-input" placeholder="Correo electrónico" name="email" required>
          <input id="swal-input3" class="swal2-input" placeholder="Teléfono" name="telefono" required>
        </form>
      `,
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar compra",
      preConfirm: () => {},
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = getFormData();
        if (isFormValid(formData)) {
          onSubmitContactForm(formData);
        } else {
          showContactForm(); // Mostrar nuevamente el diálogo si el formulario no es válido
        }
      }
    });
  };

  const getFormData = () => {
    const form = Swal.getPopup().querySelector("#contact-form");
    const formData = new FormData(form);
    return Object.fromEntries(formData);
  };

  const isFormValid = (formData) => {
    return formData.name && formData.email && formData.telefono;
  };

  const onSubmitContactForm = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "purchasesCollection"), {
        name: formData.name,
        email: formData.email,
        telefono: formData.telefono,
        cartItems: cartItems,
      });

      // Vaciar el carrito después de la compra
      setCartItems([]);

      // Mostrar el mensaje de éxito con el número de compra
      Swal.fire({
        icon: "success",
        title: "¡Compra realizada!",
        text: `Gracias por tu compra. Tu número de compra es ${docRef.id}.`,
      });
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hubo un error al procesar la compra. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  };

  const [total, setTotal] = useState(0);
  //Suma total del carrito
  useEffect(() => {
    const calculateTotal = () => {
      let sum = 0;
      cartItems.forEach((item) => {
        sum += item.price * item.quantity;
      });
      setTotal(sum);
    };

    calculateTotal();
  }, [cartItems]);

  const handleDeleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  const vaciarCompra = () => {
    setCartItems([]);
    Swal.fire({
      icon: "error",
      text: "Se eliminaron los items del carrito",
    });
  };
  return (
    <>
      {cartItems.length === 0 ? (
        <>
          <div className="empty-cart">
            <div className="cart-img-container">
              <div className="cart-img">
                <ShoppingCartIcon />
              </div>
            </div>
            <h2>Tu carrito está vacío</h2>
            <p>
              ¿Aún no te has decidido?. Tenemos servicios y productos que te
              encantaran, vuelve a la pagina de la tienda para comprobarlo
            </p>
            <Link to={"/"}>
              {" "}
              <button className="btn-tienda">Volver a la tienda</button>
            </Link>
          </div>
          <div className="empty"></div>
        </>
      ) : (
        <section className="cart">
          <h2 className="header-cart">Tu Compra</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-container">
                <div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">
                    $USD {item.price * item.quantity}
                  </p>
                </div>
                <div>
                  <img
                    className="item-img"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="item-actions">
                <div
                  className="action-circle trash"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <DeleteIcon />
                </div>
                <div className="quantity">{item.quantity}</div>
                <div
                  className="action-circle"
                  onClick={() => handleQuantityChange(item.id, "+")}
                >
                  <AddIcon />
                </div>
                <div
                  className="action-circle"
                  onClick={() => handleQuantityChange(item.id, "-")}
                >
                  <RemoveIcon />
                </div>
              </div>
            </div>
          ))}
          <div className="total-compra">
            <p>
              {" "}
              <span>El Total de tu compra es:</span> $USD {total}
            </p>
            <button className="btn-vaciar-compra" onClick={vaciarCompra}>
              Vaciar Carrito
            </button>
          </div>
          <button className="btn-compra" onClick={() => showContactForm()}>
            Confirmar compra
          </button>
        </section>
      )}
    </>
  );
};
