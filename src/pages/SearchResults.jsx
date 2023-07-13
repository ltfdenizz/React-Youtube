import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { options } from "../utils/constants";
import SideNav from "../components/SideNav";
import VideoCard from "../components/VideoCard";
import Amalia from "../assets/amalie.gif";

const SearchResults = () => {
  const [videos, setVideos] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    setVideos(null);
    axios
      .get(`https://youtube138.p.rapidapi.com/search/?q=${query}`, options)
      .then((res) => setVideos(res.data.contents));
  }, [query]);
  console.log(videos);
  return (
    <div className="flex">
      <SideNav />
      <div className="flex  justify-center p-5 w-full">
        {/* {VİDEOLAR YOKS EKRANA LOADİNG BASMA} */}
        {!videos && <img className="m-auto mt-[200px]" src={Amalia} alt="" />}
        <div className="flex flex-col gap-20   max-w-[500px]">
          {videos?.map((content, i) => {
            if (content.type !== "video") return;
            return <VideoCard key={i} videoInfo={content} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
