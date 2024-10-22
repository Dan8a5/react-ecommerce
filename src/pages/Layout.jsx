import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link> {/* Add this link */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;