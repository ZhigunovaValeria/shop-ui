import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const ClientEditPage = () => {
  const navigation = useNavigate();
  const { uid } = useParams();

  return (
    <>
      <h1>Редактирование клиента</h1>
      <p>Идентификатор клиента: {uid}</p>
      <Button onClick={() => navigation(Routings.client.list.toNavigate())}>
        Вернуться к списку клиентов
      </Button>
    </>
  );
};
