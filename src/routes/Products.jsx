import { Link, useLoaderData } from 'react-router-dom';
// In src/pages/Products.jsx



export const loader = async () => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/products`;
  const data = await fetch(apiUrl).then((response) => response.json());
  return data;
}
  
const Products = () => {
  const products = useLoaderData();
  console.log('PRODUCTS PLEASE?? :', products);

  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} >
              <Link to={`/products/${product.id}`}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;