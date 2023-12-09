import React, { useEffect } from 'react';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {millify} from 'millify';
import { Link } from 'react-router-dom';
import CryptoCurrencies from './CryptoCurrencies'
import News from './News'

const {Title} = Typography;


function HomePage() {
  // const count = 10;
  // const {data, isFetching} = useGetCryptosQuery(count);

  // if(isFetching) return 'loading...';
  // const globalStats = data.data.stats;
  // console.log(data);

  return (
    <>
      <Title level={2}>Global Statistics</Title>
      {/* <Row>
        <Col span={12}><Statistic title="Total Crytocurrencies" value={millify(globalStats.totalCoins)}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2}>Top 10 Cryptocurrencies in the world</Title>
        <Title level={4} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified /> */}
    </>
  )
}

export default HomePage