import { type FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ProductsPage } from './ProductsPage';
import { ProductDetailsPage } from './ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProductsPage />,
  },
  {
    path: '/products/:id',
    element: <ProductDetailsPage />,
  },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
