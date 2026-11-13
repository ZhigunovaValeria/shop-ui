import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App';
import { ClientsPage } from './pages/client/ui/clientsPage';
import { GoodsPage } from './pages/good/ui/goodsPage';
import { HomePage } from './pages/home/ui/homePage';
import { ShopsPage } from './pages/shop/ui/shopsPage';
import { Routings } from './shared/routing/routings';

const router = createBrowserRouter([
  {
    path: Routings.home.path,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: Routings.good.list.path, element: <GoodsPage /> },
      { path: Routings.client.list.path, element: <ClientsPage /> },
      { path: Routings.shop.list.path, element: <ShopsPage /> },
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
