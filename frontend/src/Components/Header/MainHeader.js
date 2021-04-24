import React,{useState, useEffect} from 'react'
import {Row , Col , Space, Badge, Typography, Drawer, Button} from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined,ShoppingOutlined,PauseOutlined,SearchOutlined,PicCenterOutlined} from '@ant-design/icons';
import logo from './../../assets/images/2019/08/logo.png'


const {Text} = Typography;



const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Main Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Best Seelling books
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Audio Book Homes
        </a>
      </Menu.Item>
    </Menu>
  );
  

const MainHeader = () => {
    const [visable, setVisable] = useState(false);
    const clickButton = () =>{
        setVisable(true)
    }

    const closeButton = () =>{
        setVisable(false)
    }
    useEffect(()=>{

    },[visable])

    return (
        <div className="main__header">
            <Row justify="center" align="middle">
                <Col offset={1} span={15}>
                    <Space size="large">
                        <img className="logo" src={logo} alt="" srcSet=""/>
                        <Col>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Menu <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Pages <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Events <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Blogs <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Shop <DownOutlined />
                                </a>
                            </Dropdown>
                        </Col>
                    </Space>
                </Col>
                <Col span={7}>
                    <Row justify="end">
                        <Space>

                            <Col>
                                <Badge count={5}>
                                    <ShoppingOutlined className="shopping__bag" />
                                </Badge>
                                <Text className="total__count">$0.00</Text>
                            </Col>
                                <PauseOutlined />
                            <Col>
                                <SearchOutlined />
                            </Col>
                                <PauseOutlined />

                            <Col>
                                <Button onClick={() => clickButton()}>
                                    <PicCenterOutlined />
                                </Button>
                                <Drawer
                                    title="Basic Drawer"
                                    placement="right"
                                    closable={true}
                                    onClose={()=> closeButton()}
                                    visible={visable}
                                >
                                    <p>Some content</p>
                                </Drawer>
                            </Col>
                        </Space>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MainHeader
