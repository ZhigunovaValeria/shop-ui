import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App';
import { ClientCreatePage } from './pages/client/ui/clientCreatePage';
import { ClientEditPage } from './pages/client/ui/clientEditPage';
import { ClientsPage } from './pages/client/ui/clientsPage';
import { ClientViewPage } from './pages/client/ui/clientViewPage';
import { GoodCreatePage } from './pages/good/ui/goodCreatePage';
import { GoodEditPage } from './pages/good/ui/goodEditPage';
import { GoodsPage } from './pages/good/ui/goodsPage';
import { GoodViewPage } from './pages/good/ui/goodViewPage';
import { HomePage } from './pages/home/ui/homePage';
import { ShopCreatePage } from './pages/shop/ui/shopCreatePage';
import { ShopEditPage } from './pages/shop/ui/shopEditPage';
import { ShopsPage } from './pages/shop/ui/shopsPage';
import { ShopViewPage } from './pages/shop/ui/shopViewPage';
import { Routings } from './shared/routing/routings';

const router = createBrowserRouter([
  {
    path: Routings.home.path,
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: Routings.good.list.path, element: <GoodsPage /> },
      { path: Routings.good.create.path, element: <GoodCreatePage /> },
      { path: Routings.good.view.path, element: <GoodViewPage /> },
      { path: Routings.good.edit.path, element: <GoodEditPage /> },
      { path: Routings.client.list.path, element: <ClientsPage /> },
      { path: Routings.client.create.path, element: <ClientCreatePage /> },
      { path: Routings.client.view.path, element: <ClientViewPage /> },
      { path: Routings.client.edit.path, element: <ClientEditPage /> },
      { path: Routings.shop.list.path, element: <ShopsPage /> },
      { path: Routings.shop.create.path, element: <ShopCreatePage /> },
      { path: Routings.shop.view.path, element: <ShopViewPage /> },
      { path: Routings.shop.edit.path, element: <ShopEditPage /> },
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
