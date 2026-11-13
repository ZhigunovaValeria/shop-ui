import './App.css';
import { ClientsPage } from './pages/client/ui/clientsPage';
import { GoodsPage } from './pages/good/ui/goodsPage';
import { ShopsPage } from './pages/shop/ui/shopsPage';

const App = () => {
  return (
    <main className="content">
      <ClientsPage />
      <GoodsPage />
      <ShopsPage />
    </main>
  );
};

export default App;
