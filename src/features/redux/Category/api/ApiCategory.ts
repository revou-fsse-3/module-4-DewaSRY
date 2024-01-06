import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetListCategoryResponse } from "@utils/Category/GetListCategory";
import {
  CreateCategoryPayload,
  CreateCategoryResponse,
} from "@utils/Category/CreateCategory";
import { DeleteCategoryPayload } from "@utils/Category/DeleteCategory";
import { UpdateCategoryPayload } from "@utils/Category/UpdateCategory";
import {
  GetCategoryPayload,
  GetCategoryResponse,
} from "@utils/Category/GetCategory";

import { getCookies } from "@libs/cookies";
const url = "https://mock-api.arikmpt.com/api/category";

const CategoryTags = "Category" as const;
const ApiCategory = createApi({
  reducerPath: "album",
  tagTypes: [CategoryTags],
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    fetchFn: async (...args) => {
      return fetch(...args);
    },
  }),
  endpoints(build) {
    return {
      updateCategory: build.mutation<void, UpdateCategoryPayload>({
        invalidatesTags: (_response, _err, args) => {
          return [
            {
              type: CategoryTags,
              id: args.id,
            },
          ];
        },
        query(arg) {
          return {
            url: "/update",
            body: JSON.stringify(arg),
            method: "PUT",
            headers: {
              Authorization: "Bearer " + getCookies(),
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
      }),
      deleteCategory: build.mutation<string, DeleteCategoryPayload>({
        transformResponse: (_baseQueryReturnValue, _meta, arg) => {
          return arg.id;
        },
        query: (del) => {
          return {
            url: "/" + del.id,
            method: "DELETE",
            headers: {
              Authorization: "Bearer " + getCookies(),
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
      }),
      CreateCategory: build.mutation<
        CreateCategoryResponse,
        CreateCategoryPayload
      >({
        query: (category) => ({
          url: "/create",
          method: "POST",
          body: JSON.stringify(category),
          headers: {
            Authorization: "Bearer " + getCookies(),
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
      }),
      GetListCategory: build.query<GetListCategoryResponse, number | undefined>(
        {
          transformResponse: (
            response: GetListCategoryResponse,
            _meta,
            _arg
          ) => {
            const data = response.data
              .filter((d) => d.id.trim())
              .map((d) => {
                return {
                  ...d,
                  created_at: new Date(d.created_at).toLocaleDateString(),
                  updated_at: new Date(d.updated_at).toLocaleDateString(),
                };
              });

            return {
              ...response,
              data,
            };
          },
          providesTags: (response, _error, _args) => {
            if (!response) return [];
            let tags = response?.data.map((CTG) => ({
              id: CTG.id,
              type: CategoryTags,
            }));
            return tags;
          },
          query: (pageNum) => {
            if (!pageNum) {
              pageNum = 1;
            }
            return {
              url: `?page=${pageNum}`,
              method: "GET",
              headers: {
                Authorization: "Bearer " + getCookies(),
              },
            };
          },
        }
      ),
      getCategory: build.query<GetCategoryResponse, GetCategoryPayload>({
        providesTags: (_response, _error, args) => {
          return [
            {
              type: CategoryTags,
              id: args.id,
            },
          ];
        },
        query: (args) => {
          return {
            url: "/" + args.id,
            method: "GET",
            headers: {
              Authorization: "Bearer " + getCookies(),
            },
          };
        },
      }),
    };
  },
});
export default ApiCategory;
