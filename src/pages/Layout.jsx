import { Link, Outlet, useLocation } from "react-router-dom";
import styles from './Layout.module.css';

// This is the main layout component for the application
const Layout = () => {
 // Get the current location from the router
 const location = useLocation();

 return (
   // The layout component includes a navbar and an outlet for rendering child components
   <>
     {/* Navbar */}
     <nav className={styles.navbar}>
       <ul className={styles.navList}>
         {/* Home link */}
         <li>
           <Link
             to="/"
             // Apply the 'activeLink' class if the current path is the home page
             className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}
           >
             Home
           </Link>
         </li>
         {/* Products link */}
         <li>
           <Link
             to="/products"
             // Apply the 'activeLink' class if the current path is the products page
             className={`${styles.navLink} ${location.pathname === '/products' ? styles.activeLink : ''}`}
           >
             Products
           </Link>
         </li>
         {/* Categories link */}
         <li>
           <Link
             to="/categories"
             // Apply the 'activeLink' class if the current path is the categories page
             className={`${styles.navLink} ${location.pathname === '/categories' ? styles.activeLink : ''}`}
           >
             Categories
           </Link>
         </li>
       </ul>
     </nav>

     {/* Outlet for rendering child components */}
     <main>
       <Outlet />
     </main>
   </>
 );
};

export default Layout;