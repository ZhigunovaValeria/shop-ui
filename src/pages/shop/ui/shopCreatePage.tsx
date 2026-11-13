import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const ShopCreatePage = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Создание магазина</h1>
      <p>Страница создания нового магазина.</p>
      <Button onClick={() => navigation(Routings.shop.list.toNavigate())}>
        Вернуться к списку магазинов
      </Button>
    </>
  );
};
