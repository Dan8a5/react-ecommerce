// src/components/Navigation.jsx
import { Link, useLocation } from "react-router-dom";
import styles from "../pages/Layout.module.css"; // Import from pages folder

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link 
            to="/" 
            className={`${styles.navLink} ${location.pathname === "/" ? styles.activeLink : ""}`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link 
            to="/products" 
            className={`${styles.navLink} ${location.pathname === "/products" ? styles.activeLink : ""}`}
          >
            Products
          </Link>
        </li>

        <li>
          <Link 
            to="/categories" 
            className={`${styles.navLink} ${location.pathname === "/categories" ? styles.activeLink : ""}`}
          >
            Categories
          </Link>
        </li>

        <li>
          <Link 
            to="/register" 
            className={`${styles.navLink} ${location.pathname === "/register" ? styles.activeLink : ""}`}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;