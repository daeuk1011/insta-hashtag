import axios from "axios";

const accessToken =
  "EAAEyN36dwYkBO1dqDGydggx97iModAo9UbL5jbXdLQAvLDDAAEEqBywecZBca8cnt19vykNefrAYpIl2LhhuF9t8blVn0TngQ5qA8CUayozuYPE9CjH4EAAEyN36dwYkBO28V2DfpedqDT2sb4wi5PDTCtAvjquj0e4OqJ6IPmIYx38BC4EfJ4b7FAZC6DrTsCUDrsbhoPPs72m6o7fiCKko37SjD04BZC85mouXkvVnBcauTQH0OfDf99sKcSSZAnNQtn5KVB0ZCdtTPIdgXiaTv8fLyZCok3VIBpmdjpJPu8ERw94XZAZCsqcA7hP4z0ZCJF84uxgZDZD9ZCQJiSYfO2ZBUgCufJuTtn8nT6WyrnACoLhZC7eWsOS4lpro3xQCXsNgPbBsTNCXz4E";

const userId = "17841414784975563";

const API_PREFIX = {
  BASE_URL: "https://graph.facebook.com/v18.0",
  SEARCH_HASHTAG: `/ig_hashtag_search?user_id=${userId}`,
  GET_HASHTAG_TOP_MEDIA: `/${userId}`,
};

export const instance = axios.create({
  baseURL: API_PREFIX.BASE_URL,
  //   withCredentials: true,
});

export interface FeedData {
  id: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  timestamp: string;
}

const searchHashtag = async (q: string): Promise<string> => {
  const { data } = await instance.get(`/ig_hashtag_search?user_id=${userId}&q=${q}&access_token=${accessToken}`);
  return data.data[0].id;
};

const searchFeedByHashtagId = async (
  hashtagId: string,
  searchOption: "recent_media" | "top_media"
): Promise<FeedData[]> => {
  const { data } = await instance.get(
    `/${hashtagId}/${searchOption}?user_id=${userId}&access_token=${accessToken}&fields=id,media_type,media_url,permalink,timestamp&limit=50`
  );
  return data.data;
};

export const getSearchFeed = async (q: string, searchOption: "recent_media" | "top_media") => {
  const hashtagId = await searchHashtag(q);
  const feedData = await searchFeedByHashtagId(hashtagId, searchOption);

  const filteredData = feedData.filter((x: FeedData) => x.media_url);
  return filteredData;
};
