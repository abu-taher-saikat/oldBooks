import React,{useState} from 'react'
import './Header.css';
import {Typography ,Layout, Space, Row, Col} from 'antd'
import {FacebookOutlined, TwitterOutlined ,InstagramOutlined, DribbbleOutlined} from "@ant-design/icons" 


const {Text, Link} = Typography ;



const TopHeader = () => {


    return (
        <div className="topHeader">
            <Row align="middle">
                <Col offset={2} span={16}><Text strong>Free Shipping for order over $50</Text></Col>
                <Col span={5} >
                    <Row justify="end">
                        <Space className="topHeader__icons">
                            <FacebookOutlined/>
                            <TwitterOutlined  />
                            <InstagramOutlined />
                            <DribbbleOutlined />
                        </Space>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default TopHeader
