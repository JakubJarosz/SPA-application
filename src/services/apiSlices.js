import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/products',
  }),
  tagTypes: ['Items'],
  endpoints: builder => ({
    getItems: builder.query({
      query: args => {
        const { page, id } = args;
        return {
          url: `?per_page=5&page=${page}&id=${id}`,
        };
      },
      providesTags: ['Items'],
    }),
    getAllItems: builder.query({
      query: () => `?per_page=12`,
      providesTags: ['Items'],
    }),
  }),
});

export const { useGetItemsQuery, useGetAllItemsQuery} = apiSlice;
