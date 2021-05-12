import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Buttonbenny from '../pages/Button-benny'
import { Table, Space } from 'antd';
import { Layout, Menu, Modal, Button, Drawer } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { data ,columns} from './items'

const { Header, Content, Footer, Sider } = Layout;
class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      visible: false,
    };
  }
  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };
  showDrawer = () => {
    this.setState({ visible: true });
  };
  onClose = () => {
    this.setState({ visible: false });
  };

  clickBtn = () => {
    console.log('横冲直撞')
  }
  render() {
    const { isModalVisible, visible } = this.state
    return (
      // 
      <>

        {/* 导航栏 */}
        <Layout>
          <Sider breakpoint="lg" collapsedWidth="80">
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} style={{marginTop:50}}>
              <Menu.Item key="1" icon={<UserOutlined />}>测试界面 1</Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>测试界面 2</Menu.Item>
            </Menu>
          </Sider>
          {/* 导航栏内内容 */}
          <Layout>
            <Header className="siteLayout" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="siteBackground" style={{ padding: 24, minHeight: 860}}>
                {/* 按钮 */}
                <Button type="primary" onClick={this.showModal}>点击Modal</Button>
                <Button type="primary" onClick={this.showDrawer} style={{marginLeft:20}}>点击Drawer</Button>
                {/* 对话框 */}
                <Modal title="社会主义核心价值观" visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                  <p>富强、民主、文明、和谐</p>
                  <p>自由、平等、公正、法治</p>
                  <p>爱国、敬业、诚信、友善</p>
                </Modal>
                {/* 抽屉组件 */}
                <Drawer
                  title="Basic Drawer"
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={visible}
                >
                  <p>富强、民主、文明、和谐</p>
                  <p>自由、平等、公正、法治</p>
                  <p>爱国、敬业、诚信、友善</p>
                </Drawer>
                {/* 列表 */}
                <Table columns={columns} dataSource={data} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default connect()(IndexPage);
