import { useState, useEffect } from 'react'
import {millify} from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';


function CryptoCurrencies({simplified}) {
  const count = simplified ? 10 : 100;
  const {data , isFetching} = useGetCryptosQuery(count);

  const [cryptos, SetCryptos] = useState(data?.data?.coins);
  const [searchTerm, SetSearchTerm] = useState("");

  useEffect(()=>{
    const filteredData = data?.data?.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
    SetCryptos(filteredData);
  }, [data, searchTerm])


  if(isFetching) return 'loading...';



  return (
    <>

      {
        !simplified && (
          <div className='search-crypto'>
            <Input 
              placeholder='Search Crypto'
              onChange={(e)=> SetSearchTerm(e.target.value)}
            />
          </div>
        )
      }
      
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {
          cryptos?.map(currency => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
              <Link to={`/cryptos/${currency.rank}`}>
                <Card
                  title = {`${currency.rank}. ${currency.name}`}
                  extra = {<img src={currency.iconUrl} className='crypto-image'/>}
                  hoverable
                >
                  <p>Price : {millify(currency.price)}</p>
                  <p>24h Volume : {millify(currency['24hVolume'])}</p>
                  <p>Market Cap : {millify(currency.marketCap)}</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>

    </>
  )
}

export default CryptoCurrencies