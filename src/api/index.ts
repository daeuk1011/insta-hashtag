import axios from "axios";

const accessToken =
  "EAAEyN36dwYkBO80e0xQ7VOCJ8ppcPBYuaEqsU5xMeDyhtvB2BPzZB01M9n9PsHJIDgZBlvlBDUmRPrp8j5d78y4X8AiRtQpb3QgVtpzU0kFpRZAeLaHqa6e3HUv1ZCZAkLcGNIerrb8gAxSxZAZCWavw7QEf8XJVi5snZAP2CltycE0dSwrlWfryOs0DxtJhseXKXPTEypOlMSAIXUu1okxCn6aPZBzrS";

const userId = "17841414784975563";

const API_PREFIX = {
  BASE_URL: "https://graph.facebook.com",
  SEARCH_HASHTAG: `/ig_hashtag_search?user_id=${userId}`,
  GET_HASHTAG_TOP_MEDIA: `/${userId}`,
  INSTAGRAM_URL: "https://www.instagram.com",
};

export const instance = axios.create({
  baseURL: API_PREFIX.BASE_URL,
});

export const instagramInstance = axios.create({
  baseURL: API_PREFIX.INSTAGRAM_URL,
});

export interface FeedData {
  id: string;
  media_type: string;
  media_url?: string;
  permalink: string;
  timestamp: string;
}

const searchHashtag = async (q: string): Promise<string> => {
  const { data } = await instance.get(`/v18.0/ig_hashtag_search?user_id=${userId}&q=${q}&access_token=${accessToken}`);
  return data.data[0].id;
};

const searchFeedByHashtagId = async (
  hashtagId: string,
  searchOption: "recent_media" | "top_media"
): Promise<FeedData[]> => {
  const { data } = await instance.get(
    `/v18.0/${hashtagId}/${searchOption}?user_id=${userId}&access_token=${accessToken}&fields=id,media_type,media_url,permalink,timestamp&limit=50`
  );
  return data.data;
};

export const getSearchListFeed = async (searchText: string) => {
  const { data } = await instagramInstance.get(
    `/api/v1/web/search/topsearch/?context=blended&include_reel=true&query=%23${searchText}&rank_token=1&search_surface=web_top_search`
  );
  console.log(data);
  return data;
};

export const getSearchFeed = async (q: string, searchOption: "recent_media" | "top_media") => {
  const hashtagId = await searchHashtag(q);
  const feedData = await searchFeedByHashtagId(hashtagId, searchOption);

  const filteredData = feedData.filter((x: FeedData) => x.media_url);
  return filteredData;
};
