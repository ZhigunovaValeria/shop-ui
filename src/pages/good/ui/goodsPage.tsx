import { EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router';
import { Routings } from '../../../shared/routing/routings';

export const GoodsPage = () => {
  const navigation = useNavigate();

  return (
    <>
      <h1>Goods</h1>
      <p>Товар №1</p>
      <Space wrap>
        <Button
          icon={<EyeOutlined />}
          onClick={() => navigation(Routings.good.view.toNavigate('1'))}
        >
          Просмотреть товар
        </Button>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => navigation(Routings.good.create.toNavigate())}
        >
          Создать товар
        </Button>
        <Button
          icon={<EditOutlined />}
          onClick={() => navigation(Routings.good.edit.toNavigate('1'))}
        >
          Редактировать товар
        </Button>
      </Space>
    </>
  );
};
