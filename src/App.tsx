import './App.css';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router';
import { Routings } from './shared/routing/routings';

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: 'home',
    label: (
      <NavLink to={Routings.home.toNavigate()} end>
        Домой
      </NavLink>
    ),
  },
  {
    key: 'goods',
    label: <NavLink to={Routings.good.list.toNavigate()}>Товары</NavLink>,
  },
  {
    key: 'clients',
    label: <NavLink to={Routings.client.list.toNavigate()}>Клиенты</NavLink>,
  },
  {
    key: 'shops',
    label: <NavLink to={Routings.shop.list.toNavigate()}>Магазины</NavLink>,
  },
];

const App = () => {
  return (
    <Layout style={{ height: '100%', width: '100%' }}>
      <Header>
        <Menu theme="dark" mode="horizontal" items={menuItems} />
      </Header>
      <Content style={{ padding: '24px', backgroundColor: '#fff' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Система мониторинга shop-ui
      </Footer>
    </Layout>
  );
};

export default App;
