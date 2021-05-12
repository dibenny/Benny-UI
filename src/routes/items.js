
import { Table, Space } from 'antd';
 export const columns = [
    {
      title: '名字',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>删除</a>
        </Space>
      ),
    },
  ];

export const data = [
  {
    key: '1',
    name: '张三',
    age: 32,
    address: '北京天安门',
  },
  {
    key: '2',
    name: '李四',
    age: 42,
    address: '上海陆家嘴',
  },
  {
    key: '3',
    name: '王五',
    age: 32,
    address: '杭州雷峰塔',
  },
  {
    key: '4',
    name: '老六',
    age: 32,
    address: '杭州雷峰塔',
  },
  {
    key: '5',
    name: '崔七',
    age: 32,
    address: '杭州雷峰塔',
  },
];