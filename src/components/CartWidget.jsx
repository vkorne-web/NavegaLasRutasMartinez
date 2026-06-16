import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
  const { getTotalQuantity } = useCart();
  const totalQty = getTotalQuantity();

  return (
    <Link to="/cart" className="cart-widget">
      <span role="img" aria-label="carrito" className="cart-icon">&#x1F6D2;</span>
      {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
    </Link>
  );
};

export default CartWidget;
