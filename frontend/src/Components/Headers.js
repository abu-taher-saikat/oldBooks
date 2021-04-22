import { Layout, Menu } from 'antd';
import React from 'react';
const { Header } = Layout;


const Headers = () => {
    return (
        <div>
            <Layout>
                <Header>
                {/* <div className="logo" /> */}
                    <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
        </div>
    )
}

export default Headers
