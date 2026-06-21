import { useCart } from "./CartContext";

function ProductListing() {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Phone",
      price: 25000,
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 5000,
    },
  ];

  return (
    <div>
      <h2>Product Listing</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;