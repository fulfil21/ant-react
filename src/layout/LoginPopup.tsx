import React, { useState } from 'react';
import { Modal , Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const LoginPopup = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };
      
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
        <Button type="primary" onClick={showModal}>
            Log in
        </Button>
        <Modal title="Log in" width={350} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item>
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>
            <Form.Item>
                <a href="">register now!</a>
            </Form.Item>
            </Form>
        </Modal>
        </>
    );
};

export default LoginPopup;