// Import necessary routing components from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import page components and their associated loaders/actions
import Layout from "../pages/Layout";
import Home, { loader as homeLoader } from "./Home";
import Categories, { loader as categoriesLoader } from "./Categories";
import Products, { loader as productsLoader } from "./Products";
import ErrorPage from "../pages/Error";
import SingleProduct, { loader as singleProductLoader } from "./SingleProduct";
import Registration, { action as registrationAction } from "./Registration";

const AppRouter = () => {
  // Create a browser router with route configurations
  const router = createBrowserRouter([
    {
      // Root layout component that wraps all routes
      element: <Layout />,
      // Global error boundary for handling routing errors
      errorElement: <ErrorPage />,
      // Child routes that will be rendered inside the Layout component
      children: [
        {
          // Home page route: "/"
          path: "/",
          element: <Home />,
          // Loader function runs before rendering Home component
          loader: homeLoader,
        },
        {
          // Products list route: "/products"
          path: "/products",
          element: <Products />,
          // Loader to fetch products data
          loader: productsLoader,
        },
        {
          // Single product details route: "/products/123"
          path: "/products/:id", // :id is a dynamic parameter
          element: <SingleProduct />,
          // Loader to fetch single product data using the id parameter
          loader: singleProductLoader,
        },
        {
          // Categories route: "/categories"
          path: "/categories",
          element: <Categories />,
          // Loader to fetch categories data
          loader: categoriesLoader,
          // Nested routes within categories
          children: [
            {
              // Category-specific products route: "/categories/electronics"
              path: ":category", // :category is a dynamic parameter
              element: <Products />,
              // Loader to fetch products filtered by category
              loader: productsLoader,
            },
          ],
        },
        {
          // Registration route: "/register"
          path: "/register",
          element: <Registration />,
          // Action to handle form submission in Registration component
          action: registrationAction,
        },
      ],
    },
  ]);

  // Provide the router configuration to the app
  return <RouterProvider router={router} />;
};

export default AppRouter;

/* 
Key Concepts:

1. Route Structure:
  - Layout component contains <Outlet /> where child routes are rendered
  - ErrorPage catches and displays routing errors
  - Nested routes (like in categories) render inside parent components

2. Dynamic Parameters:
  - :id in /products/:id captures product IDs
  - :category in /categories/:category captures category names
  - These parameters are accessible in loaders and components

3. Data Loading:
  - loaders run before components render
  - loader data is accessible via useLoaderData() hook
  - actions handle form submissions and data mutations

4. Navigation:
  - Use <Link> or useNavigate() for client-side navigation
  - Loader data is automatically revalidated on navigation
*/
