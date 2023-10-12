import React, { useState } from "react";
import "./index.css";
import reactLogo from "./../../assets/instagram.svg";
import omtLabsLogo from "./../../assets/omtlabs.svg";
import { useNavigate } from "react-router-dom";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchButton = (searchOption: "recent_media" | "top_media") => {
    navigate("feed", {
      state: {
        q: searchText,
        searchOption,
      },
    });
  };

  const handleOnKeyDown = (e: React.KeyboardEvent, searchOption: "recent_media" | "top_media") => {
    if (e.key === "Enter") handleSearchButton(searchOption);
  };

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
          onKeyDown={(e) => handleOnKeyDown(e, "recent_media")}
          style={{
            width: 500,
            height: 50,
            borderRadius: 8,
            border: "1px solid black",
            padding: "1.2rem 1rem 1.2rem 1rem",
          }}
        ></input>
        <button onClick={() => handleSearchButton("recent_media")} style={{ height: 50, margin: "0.3rem" }}>
          검색
        </button>
      </div>
      <p className="read-the-docs">Made by OMT Labs</p>
    </>
  );
};
