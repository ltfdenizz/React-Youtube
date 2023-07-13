import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { options } from "../utils/constants";
import Amalia from "../assets/amalie.gif";
import ReactPlayer from "react-player";
import { AiFillLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import millify from "millify";
import VideoCard from "../components/VideoCard";
import StringArea from "../components/StringArea";
const VideoDetail = () => {
  const params = useParams();
  const [details, setDetails] = useState(null);
  const [relatedContent, setRelatedContent] = useState(null);
  useEffect(() => {
    setDetails(null);
    setRelatedContent(null);
    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/details/?id=${params.videoId}`,
        options
      )
      .then((res) => setDetails(res.data));
    axios
      .get(
        `https://youtube138.p.rapidapi.com/video/related-contents/?id=${params.videoId}`,
        options
      )
      .then((res) => setRelatedContent(res.data.contents));
    // ! BAĞIMLILIK OLARAK USE PARAMSTAN GELEN VİDEOID EKLEDİK DİĞER VİDEOLARI TIKLANINCA ÇEKMESİ İÇİN
  }, [params.videoId]);
  console.log(details);
  return (
    <div>
      {!details && <img src={Amalia} className="m-auto mt-[300px]" />}
      {details && (
        <div className="flex flex-col  lg:flex-row lg:justify-between justify-center gap-5 p-3 sm:p-5 md:p-12 ">
          {/* Ana içerik */}
          <div className=" flex flex-col items-center lg:max-w-[1000px] ">
            <ReactPlayer
              width={"100%"}
              url={`https://www.youtube.com/watch?v=${details.videoId}`}
              controls
              playing={true}
            />
            <div className="flex flex-col gap-5 mt-5">
              <h2>{details?.title}</h2>
              <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                  <img
                    className="w-[48px] h-[48px] rounded-full"
                    src={details?.author?.avatar[0]?.url}
                    alt=""
                  />
                  <div>
                    <p>{details.author.title}</p>
                    <p>{details.author.stats.subscribersText}</p>
                  </div>
                  <button className="bg-white text-black rounded-lg p-1 hover:bg-red-900 hover:text-white">
                    Abone Ol
                  </button>
                </div>
                <div className="flex gap-5">
                  <div className="flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700">
                    <AiFillLike />
                    <span>{millify(details.stats.likes)}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800 rounded p-3 cursor-pointer hover:bg-gray-700">
                    <FaShare />
                    <span>Paylaş</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-600 rounded p-4">
                <p className="flex gap-5 mb-3">
                  <span>{millify(details.stats.views)} kez izlendi.</span>
                  <span>{details.publishedDate} tarihinde yayınlandı.</span>
                </p>
                <StringArea text={details.description} max={100} />
              </div>
            </div>
          </div>
          {/* Alakalı içerik */}
          <div className="flex flex-col gap-3 lg:max-w-[300px] related">
            {!relatedContent && <p>Loading...</p>}
            {relatedContent &&
              relatedContent.map((video, i) => {
                if (video.type !== "video") return;
                return <VideoCard key={i} videoInfo={video} />;
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
