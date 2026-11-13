import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const ClientsPage = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Clients</h1>
      <p>Клиент №1</p>
      <Space wrap>
        <Button
          icon={<EyeOutlined />}
          onClick={() => navigation(Routings.client.view.toNavigate('1'))}
        >
          Просмотреть клиента
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigation(Routings.client.create.toNavigate())}
        >
          Создать клиента
        </Button>
        <Button
          icon={<EditOutlined />}
          onClick={() => navigation(Routings.client.edit.toNavigate('1'))}
        >
          Редактировать клиента
        </Button>
      </Space>
    </>
  );
};
