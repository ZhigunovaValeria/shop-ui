import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const GoodCreatePage = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Создание товара</h1>
      <p>Страница создания нового товара.</p>
      <Button onClick={() => navigation(Routings.good.list.toNavigate())}>
        Вернуться к списку товаров
      </Button>
    </>
  );
};
