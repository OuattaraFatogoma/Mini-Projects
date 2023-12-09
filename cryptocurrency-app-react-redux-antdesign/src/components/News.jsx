import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


function News({simplified}) {
  const {data, isFetching} = useGetCryptoNewsQuery({categorie: 'Cryptocurrencies', count: simplified? 6: 12});

  if(isFetching) return 'Loading...';

  console.log(data);
  return (
    <div>News</div>
  )
}

export default News