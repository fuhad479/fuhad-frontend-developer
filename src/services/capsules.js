import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const capsulesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3",
  }),
  endpoints: (builder) => ({
    getAllCapsules: builder.query({
      query: ({ status, mission, reuseCount }) => {
        console.log({ status, mission, reuseCount });
        return {
          url: "/capsules",
        };
      },
    }),
  }),
});

export const { useGetAllCapsulesQuery } = capsulesApi;
