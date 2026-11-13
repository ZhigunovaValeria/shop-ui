import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const ShopViewPage = () => {
  const navigation = useNavigate();
  const { uid } = useParams();

  return (
    <>
      <h1>Просмотр магазина</h1>
      <p>Идентификатор магазина: {uid}</p>
      <Button onClick={() => navigation(Routings.shop.list.toNavigate())}>
        Вернуться к списку магазинов
      </Button>
    </>
  );
};
