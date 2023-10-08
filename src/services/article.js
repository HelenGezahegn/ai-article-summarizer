import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const SUMMARY_LENGTH = 3;

// baseUrl = which API we want to call
// headers contain our special API keys that allow us to make the requests
export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", RAPID_API_KEY);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
      query: (params) =>
        `summarize?url=${encodeURIComponent(
          params.articleUrl
        )}&length=${SUMMARY_LENGTH}`
    })
  })
});

// useLazy let's us use this on demand (user enters URL and submits)
// rather than when the app loads
export const { useLazyGetSummaryQuery } = articleApi;
