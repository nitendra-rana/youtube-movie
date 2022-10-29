import React from "react";
import ReactPlayer from "react-player";
import "./Page.css";

const Page2 = ({ player, title }) => {

  const Title = title.toUpperCase();
  return (
    <div className="player">
      <h1 id = "title">{Title}</h1>
     <ReactPlayer height = "80%" width= "80%" className = "video" url={player}  controls/>
    </div>
  );
};

export default Page2;
