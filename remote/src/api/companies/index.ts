import { LabeledValue } from "antd/es/select";
import { baseApi } from "..";
import { ICompaniesQuery } from "./types";

export const companiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCompanies: builder.query<LabeledValue[], ICompaniesQuery | undefined>({
      query: (params) => ({
        url: `/companies/list/`,
        method: "GET",
        params,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCompaniesQuery } = companiesApi;
