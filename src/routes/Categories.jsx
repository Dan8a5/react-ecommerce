import { Link } from 'react-router-dom';
export const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];
const Categories = () => {
  return (
    <div className={styles.container}>
      <h1>Categories</h1>
      <ul className={styles.categoryList}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoryItem}>
            <Link to={`/categories/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;