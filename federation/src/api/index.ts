import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const baseApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ui-skzs-dev.apps.okd4.paas.ibs.ru/api/",
  }),
  endpoints: () => ({}),
});
