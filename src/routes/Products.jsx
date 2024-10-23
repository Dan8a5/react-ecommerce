// Import necessary dependencies from react-router-dom and CSS module
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import styles from './Products.module.css';

/**
* Data loader for the Products component
* Fetches all products from the API endpoint
* This loader is executed by react-router before rendering the component
* 
* @async
* @returns {Promise<Array<Product>>} Array of product objects
* @throws {Error} When API fetch fails or returns non-OK status
*/
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

/**
* Products component that displays a grid of products
* Can filter products by category using URL search parameters
* Each product links to its detailed view
* 
* @component
* @example
* return (
*   <Router>
*     <Route path="/products" element={<Products />} loader={loader} />
*   </Router>
* )
*/
const Products = () => {
 // Get products data from the loader
 const products = useLoaderData();
 
 // Get search parameters from URL
 const [searchParams] = useSearchParams();
 
 // Extract category filter from URL search parameters
 const selectedCategory = searchParams.get('category');
 
 // Filter products by category if a category is selected
 // If no category is selected, show all products
 const filteredProducts = selectedCategory
   ? products.filter(product => 
       product.category.toLowerCase() === selectedCategory.toLowerCase()
     )
   : products;

 return (
   <div className={styles.productsContainer}>
     {/* Dynamic title based on selected category */}
     <h2 className={styles.title}>
       {selectedCategory 
         ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products`
         : 'All Products'
       }
     </h2>

     {/* Product grid layout */}
     <ul className={styles.productList}>
       {filteredProducts.map((product) => (
         <li key={product.id} className={styles.productItem}>
           {/* Each product links to its detail page */}
           <Link to={`/products/${product.id}`} className={styles.productLink}>
             <img 
               src={product.image} 
               alt={product.title} 
               className={styles.productImage}
             />
             <h4 className={styles.productTitle}>{product.title}</h4>
           </Link>
         </li>
       ))}
     </ul>
   </div>
 );
};



export default Products;