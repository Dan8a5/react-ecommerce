import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "./Home";
import Categories from "./Categories"; // Fixed path
import Products, { loader as productsLoader } from "./Products"; // Make sure this path is correct too
import ErrorPage from "../pages/Error";
import SingleProduct, {loader as singleProductLoader} from "./SingleProduct";

const Routes = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          loader: singleProductLoader,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
