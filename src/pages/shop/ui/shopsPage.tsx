import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const ShopsPage = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Shops</h1>
      <p>Магазин №1</p>
      <Space wrap>
        <Button
          icon={<EyeOutlined />}
          onClick={() => navigation(Routings.shop.view.toNavigate('1'))}
        >
          Просмотреть магазин
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigation(Routings.shop.create.toNavigate())}
        >
          Создать магазин
        </Button>
        <Button
          icon={<EditOutlined />}
          onClick={() => navigation(Routings.shop.edit.toNavigate('1'))}
        >
          Редактировать магазин
        </Button>
      </Space>
    </>
  );
};
