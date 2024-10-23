import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import styles from './Products.module.css';

// Loader export that was missing
export const loader = async () => {
  try {
    const apiUrl = `${import.meta.env.VITE_API_URL}/products`;
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading products:', error);
    throw error;
  }
};

// Star rating component
const StarRating = ({ rating }) => {
  return (
    <div className={styles.ratingContainer}>
      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.star} ${
              star <= rating.rate ? styles.filled : ''
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <span className={styles.ratingCount}>({rating.count})</span>
    </div>
  );
};

const Products = () => {
  const products = useLoaderData();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');
  
  const filteredProducts = selectedCategory
    ? products.filter(product => 
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : products;

  if (!filteredProducts.length) {
    return (
      <div className={styles.emptyState}>
        <h2>No products found in this category</h2>
        <Link to="/products">View all products</Link>
      </div>
    );
  }

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.title}>
        {selectedCategory 
          ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
          : 'All Products'
        }
      </h2>
      
      <ul className={styles.productList}>
        {filteredProducts.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Link to={`/products/${product.id}`} className={styles.productLink}>
              <div className={styles.imageWrapper}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className={styles.productImage}
                  loading="lazy"
                />
              </div>
              <div className={styles.productInfo}>
                <h4 className={styles.productTitle}>{product.title}</h4>
                <div className={styles.priceRating}>
                  <span className={styles.price}>${product.price.toFixed(2)}</span>
                  <StarRating rating={product.rating} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;