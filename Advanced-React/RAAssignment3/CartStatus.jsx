import { useCart } from "./CartContext";

function CartStatus() {
  const { cart } = useCart();

  return (
    <div>
      <strong>Cart Items: {cart.length}</strong>
    </div>
  );
}

export default CartStatus;