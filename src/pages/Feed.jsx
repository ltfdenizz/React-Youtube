import SideNav from "../components/SideNav";
import { useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";
import VideoCard from "../components/VideoCard";
import Amalia from "../assets/amalie.gif";
const Feed = () => {
  const { searchResult } = useContext(YoutubeContext);
  return (
    <div className=" flex ">
      <SideNav />
      <div className="videos">
        {!searchResult ? (
          <img src={Amalia} className="m-auto mt-[300px]" />
        ) : (
          searchResult.map((video) => {
            // eğerki elemanın tipi video değilse bişey yapma
            if (video.type !== "video") return;
            return <VideoCard videoInfo={video} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feed;
