// Categories.jsx
import { Link, useLoaderData } from 'react-router-dom';
import styles from './Categories.module.css';

// Loader function to fetch the category data
export const loader = async () => {
 try {
   // Fetch the categories from the API
   const response = await fetch(`${import.meta.env.VITE_API_URL}/products/categories`);
   const categories = await response.json();
   return { categories };
 } catch (error) {
   // Throw the error to be handled by the error page
   throw error;
 }
};

// Function to get the appropriate icon for a category
const getCategoryIcon = (category) => {
 // Map of category icons
 const icons = {
   'electronics': '🔌',
   'jewelery': '💍',
   "men's clothing": '👔',
   "women's clothing": '👗'
 };
 // Return the icon, or a default icon if the category is not found
 return icons[category] || '📦';
};

// Categories component
const Categories = () => {
 // Get the categories data from the loader
 const { categories } = useLoaderData();

 return (
   <div className={styles.container}>
     <h1 className={styles.title}>Browse Categories</h1>
     <div className={styles.categoryGrid}>
       {/* Render a link for each category */}
       {categories.map((category) => (
         <Link
           to={`/products?category=${category}`}
           key={category}
           className={styles.categoryCard}
         >
           <div className={styles.categoryIcon}>
             {/* Display the category icon */}
             {getCategoryIcon(category)}
           </div>
           <h2 className={styles.categoryName}>
             {/* Capitalize the first letter of the category */}
             {category.charAt(0).toUpperCase() + category.slice(1)}
           </h2>
           <p className={styles.categoryDescription}>
             {/* Display a description for the category */}
             Browse our collection of {category}
           </p>
           <button className={styles.browseButton}>
             {/* Display a button to browse the category */}
             Browse {category}
           </button>
         </Link>
       ))}
     </div>
   </div>
 );
};

export default Categories;