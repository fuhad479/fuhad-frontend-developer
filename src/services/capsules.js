import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const capsulesApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4",
  }),
  endpoints: (builder) => ({
    getCapsules: builder.mutation({
      query: ({ page, status, serial, reuse_count }) => {
        function generateQuery() {
          let query = {};
          if (status !== "") {
            query.status = status;
          }

          if (serial !== "") {
            query.serial = serial;
          }

          if (reuse_count !== "") {
            query.reuse_count = reuse_count;
          }

          return query;
        }

        const queryParams = generateQuery();

        return {
          url: `/capsules/query`,
          method: "POST",
          body: {
            query: queryParams,
            options: { limit: 8, page },
          },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          capsulesApi.util.updateQueryData(
            "getCapsule",
            arg.page,
            (draft) => {
              console.log(JSON.stringify(draft));
            }
          )
        );

        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
    getCapsule: builder.query({
      query: (serial) => {
        return {
          url: `/capsules/${serial}`,
        };
      },
    }),
  }),
});

export const { useGetCapsulesMutation, useGetCapsuleQuery } = capsulesApi;
export default capsulesApi;
