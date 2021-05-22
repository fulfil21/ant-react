import React from 'react';
import ReactDOM from 'react-dom';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import RegistrationForm from './RegistrationForm';

const { Option } = Select;

class AccountDrawer extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button  onClick={this.showDrawer}>
          <PlusOutlined /> New account
        </Button>
        <Drawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
        <RegistrationForm />
        </Drawer>
      </>
    );
  }
}

export default AccountDrawer;