import { useCart } from "./CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{item.name}</h3>

            <p>Price: ₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;