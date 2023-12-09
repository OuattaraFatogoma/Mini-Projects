import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://api.bing.microsoft.com/v7.0';
const option = {
    'Ocp-Apim-Subscription-Key': 'f480a90cc7msh78e5d2ced0755ecp1e73dajsn61316da9cddc',
  };

const createRequest = (url) => ({url, headers: option});


export const  cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({categorie, count}) => createRequest(`/news/search?q=${categorie}&count=${count}&freshness=Day&textFormat=Raw&safeSearch=Off`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;