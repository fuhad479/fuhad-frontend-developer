import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const capsulesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3",
  }),
  endpoints: (builder) => ({
    getAllCapsules: builder.query({
      query: ({ status, mission, reuseCount }) => {
        // console.log({ status, mission, reuseCount });

        function generateUrl(urlPath) {
          const urlParams = [];
          if (status !== "") {
            urlParams.push(`status=${status}`);
          }

          if (mission !== "") {
            urlParams.push(`mission=${mission}`);
          }

          if (reuseCount !== "") {
            urlParams.push(`reuse_count=${reuseCount}`);
          }

          return urlParams.length > 0
            ? `${urlPath}/?${urlParams.join("&")}`
            : "/capsules";
        }

        generateUrl("/capsules");

        return {
          url: generateUrl("/capsules"),
        };
      },
    }),
  }),
});

export const { useGetAllCapsulesQuery } = capsulesApi;
