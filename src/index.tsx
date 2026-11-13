import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App';
import { ClientsPage } from './pages/client/ui/clientsPage';
import { GoodsPage } from './pages/good/ui/goodsPage';
import { ShopsPage } from './pages/shop/ui/shopsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'goods', element: <GoodsPage /> },
      { path: 'clients', element: <ClientsPage /> },
      { path: 'shops', element: <ShopsPage /> },
    ],
  },
]);

const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
