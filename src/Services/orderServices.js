import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { realtime_database_url } from "../Database/firebaseConfig";

export const orderApi = createApi({
    reducerPath: 'orderApi',
    baseQuery: fetchBaseQuery({ baseUrl: realtime_database_url }),
    endpoints: (builder) => ({
        getOrders: builder.query({
          query: (email) => `orders.json?orderBy="user"&equalTo="${email}"`,
          transformResponse: (response) => {
            const productsTransformed = Object.values(response)
            return (productsTransformed)
        }
        }),
    })
})

export const {
    useGetOrdersQuery
} = orderApi