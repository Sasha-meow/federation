import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query<any, undefined>({
      query: (params) => ({
        url: "location/",
        method: "GET",
        params,
      }),
    }),
  }),
});

export const { useGetPokemonsQuery, useLazyGetPokemonsQuery } = baseApi;
