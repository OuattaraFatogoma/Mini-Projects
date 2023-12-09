import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography, Button, Menu } from 'antd';
import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined } from '@ant-design/icons';

import icon from "../images/logo.png";




function Navbar() {
  return (
    <div className='nav-Container'>
        <div className='logo-container'> 
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2}>
                <Link to="/" >CryptoInfo</Link>
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined/>} key="home">
                <Link to="/">Home</Link>
            </Menu.Item>

            <Menu.Item icon={<FundOutlined/>} key="cryptocurrencies">
                <Link to="/cryptocurrencies">Crypto Currencies</Link>
            </Menu.Item>

            <Menu.Item icon={<MoneyCollectOutlined/>} key="exchange">
                <Link to="/exchange">Exchange</Link>
            </Menu.Item>

            <Menu.Item icon={<BulbOutlined/>} key="news">
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar