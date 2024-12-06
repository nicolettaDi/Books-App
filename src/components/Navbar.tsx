import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav style={{ display: "block" }}>
        <Link to='/Books'>Books</Link>
        <Link to='/ShoppingCart'>Shopping Cart</Link>
      </nav>
    </>
  );
};
