import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const ClientCreatePage = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Создание клиента</h1>
      <p>Страница создания нового клиента.</p>
      <Button onClick={() => navigation(Routings.client.list.toNavigate())}>
        Вернуться к списку клиентов
      </Button>
    </>
  );
};
