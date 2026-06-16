import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartContainer = () => {
  const { cartItems, removeItem, clearCart, getTotalQuantity } = useCart();
  const totalQty = getTotalQuantity();

  if (totalQty === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <h2>Tu carrito esta vacio</h2>
          <p>Agrega productos desde el catalogo para empezar a comprar.</p>
          <Link to="/" className="back-link">Ir al catalogo</Link>
        </div>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de compras</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-img" />
            <div className="cart-item-info">
              <h4>{item.title}</h4>
              <p>Categoria: {item.category}</p>
              <p>Cantidad: {item.quantity}</p>
              <p className="cart-item-price">$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <button
              className="cart-item-remove"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total">
          Total ({totalQty} productos): <strong>$ {totalPrice.toFixed(2)}</strong>
        </p>
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={clearCart}>
            Vaciar carrito
          </button>
          <Link to="/" className="back-link">Seguir comprando</Link>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
