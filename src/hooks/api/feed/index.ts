import { useQuery } from "@tanstack/react-query";
import { getSearchFeed, getSearchListFeed } from "../../../api";

export const useFeed = (q: string, searchOption: "recent_media" | "top_media") => {
  return useQuery(
    ["useFeed"],
    async () => {
      const result = await getSearchFeed(q, searchOption);
      console.log(result);
      return result;
    },
    {
      retry: 0,
      staleTime: 500,
      keepPreviousData: true,
    }
  );
};

export const useSearchList = (q: string) => {
  return useQuery(
    ["useSearchList"],
    async () => {
      const result = await getSearchListFeed(q);
      return result;
    },
    {
      retry: 0,
      staleTime: 500,
      keepPreviousData: true,
    }
  );
};
