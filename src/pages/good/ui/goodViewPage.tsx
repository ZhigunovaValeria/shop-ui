import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const GoodViewPage = () => {
  const navigation = useNavigate();
  const { uid } = useParams();

  return (
    <>
      <h1>Просмотр товара</h1>
      <p>Идентификатор товара: {uid}</p>
      <Button onClick={() => navigation(Routings.good.list.toNavigate())}>
        Вернуться к списку товаров
      </Button>
    </>
  );
};
