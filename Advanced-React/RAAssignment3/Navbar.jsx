import { Link } from "react-router-dom";
import CartStatus from "./CartStatus";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid black",
      }}
    >
      <div>
        <Link to="/">Products</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </div>

      <CartStatus />
    </nav>
  );
}

export default Navbar;