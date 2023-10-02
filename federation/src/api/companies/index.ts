import { baseApi } from "..";

export const pokemonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemons: builder.query<any, undefined>({
      query: (params) => ({
        url: `/`,
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetPokemonsQuery } = pokemonApi;
