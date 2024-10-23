// Import necessary dependencies from react-router-dom and CSS module
import { useLoaderData, Link } from 'react-router-dom';
import styles from './Home.module.css';

/**
 * Loader function to fetch product categories from the API
 * This function is used by react-router to load data before rendering the component
 * @returns {Promise<Object>} Object containing array of categories
 * @throws {Error} If the API request fails
 */
export const loader = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    const categories = await response.json();
    return { categories };
  } catch (error) {
    console.error('Error loading categories:', error);
    throw new Error('Failed to load categories. Please try again later.');
  }
};

/**
 * Maps category names to their corresponding emoji icons
 * @param {string} category - The category name
 * @returns {string} The emoji icon corresponding to the category
 */
const getCategoryIcon = (category) => {
  const icons = {
    'electronics': '🔌',
    'jewelery': '💍',
    "men's clothing": '👔',
    "women's clothing": '👗'
  };
  // Return the matching icon or a default package emoji if category isn't found
  return icons[category] || '📦';
};

/**
 * Home component that displays a grid of product categories
 * Each category is represented by a card with an icon and title
 * Categories are clickable and link to their respective product listings
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
  // Extract categories data loaded by the router
  const { categories } = useLoaderData();

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to Our Store</h1>
      <div className={styles.categoriesGrid}>
        {/* Map through categories to create category cards */}
        {categories.map((category) => (
          <Link 
            to={`/products?category=${category}`}
            key={category}
            className={styles.categoryLink}
          >
            <div className={styles.categoryCard}>
              <div className={styles.categoryIcon}>
                {getCategoryIcon(category)}
              </div>
              <h2 className={styles.categoryTitle}>
                {category}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;