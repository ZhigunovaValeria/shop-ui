import './App.css';
import { NavLink, Outlet } from 'react-router';

const App = () => {
  return (
    <main className="content">
      <h1>App</h1>
      <nav className="navigation" aria-label="Разделы">
        <NavLink to="/shops">Магазины</NavLink>
        <NavLink to="/clients">Клиенты</NavLink>
        <NavLink to="/goods">Товары</NavLink>
      </nav>
      <Outlet />
    </main>
  );
};

export default App;
