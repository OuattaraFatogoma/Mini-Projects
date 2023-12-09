import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const cryptoApiHeader = {
    'X-RapidAPI-Key': 'f480a90cc7msh78e5d2ced0755ecp1e73dajsn61316da9cddc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoApiHeader});


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})

export const { useGetCryptosQuery } = cryptoApi;