import React from "react";
import "./index.css";
import { Feed } from "../../components/Feed";
import { useLocation } from "react-router-dom";

export const FeedPage: React.FC = () => {
  const { state } = useLocation();
  return (
    <div>
      <h1>#{state.q}</h1>
      <Feed />
    </div>
  );
};
