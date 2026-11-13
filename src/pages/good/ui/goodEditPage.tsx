import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const GoodEditPage = () => {
  const navigation = useNavigate();
  const { uid } = useParams();

  return (
    <>
      <h1>Редактирование товара</h1>
      <p>Идентификатор товара: {uid}</p>
      <Button onClick={() => navigation(Routings.good.list.toNavigate())}>
        Вернуться к списку товаров
      </Button>
    </>
  );
};
