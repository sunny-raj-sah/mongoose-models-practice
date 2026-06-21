import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        borderBottom: "1px solid black",
      }}
    >
      <Link to="/">All Books</Link>

      <Link to="/add">Add Book</Link>
    </nav>
  );
}

export default Navbar;