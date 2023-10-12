import React, { useState } from "react";
import "./index.css";
import reactLogo from "./../../assets/instagram.svg";
import omtLabsLogo from "./../../assets/omtlabs.svg";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchButton = async (searchTextProps: string) => {
    navigate("feed", {
      state: {
        q: searchTextProps,
      },
    });
  };

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearchButton(searchText);
  };

  const handleSearchList = async (searchTextProps: string) => {
    await handleSearchButton(searchTextProps);
  };

  const data = [
    {
      position: 0,
      hashtag: {
        name: "성수동맛집",
        id: 17841557776105378,
        media_count: 812269,
        use_default_avatar: true,
        search_result_subtitle: "게시물 81.2만",
      },
    },
    {
      position: 1,
      hashtag: {
        name: "성수맛집",
        id: 17843798476031726,
        media_count: 717947,
        use_default_avatar: true,
        search_result_subtitle: "게시물 71.7만",
      },
    },
    {
      position: 2,
      hashtag: {
        name: "성수동카페",
        id: 17843645044031416,
        media_count: 1146282,
        use_default_avatar: true,
        search_result_subtitle: "게시물 114만",
      },
    },
    {
      position: 3,
      hashtag: {
        name: "성신여대맛집",
        id: 17841564262085452,
        media_count: 297709,
        use_default_avatar: true,
        search_result_subtitle: "게시물 29.7만",
      },
    },
    {
      position: 4,
      hashtag: {
        name: "성산맛집",
        id: 17842666063030862,
        media_count: 790113,
        use_default_avatar: true,
        search_result_subtitle: "게시물 79만",
      },
    },
    {
      position: 5,
      hashtag: {
        name: "성수카페",
        id: 17843727766013830,
        media_count: 675854,
        use_default_avatar: true,
        search_result_subtitle: "게시물 67.5만",
      },
    },
  ];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={omtLabsLogo} className="logo" alt="Omtlabs logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo instagram" alt="Instagram logo" />
        </a>
      </div>
      <h1>지금 당장 해시태그를 검색해보세요</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}
        <input
          type="search"
          placeholder="검색어를 입력해주세요"
          // onBlur={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={handleOnKeyDown}
          style={{
            width: 500,
            height: 50,
            borderRadius: 8,
            border: "1px solid black",
            padding: "1.2rem 1rem 1.2rem 1rem",
          }}
        ></input>
        <button onClick={() => handleSearchButton(searchText)} style={{ height: 50, margin: "0.3rem" }}>
          검색
        </button>
        <div className="search-list">
          {data.flatMap((searchListData) => (
            <>
              <div
                key={searchListData.hashtag.id}
                className="search-list-item"
                onClick={() => handleSearchList(searchListData?.hashtag?.name)}
              >
                <div className="item-left">{searchListData.hashtag.name}</div>
                <div className="item-right">{searchListData.hashtag.search_result_subtitle}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <p className="read-the-docs">Made by OMT Labs</p>
    </>
  );
};
