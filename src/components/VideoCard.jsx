import millify from "millify";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const VideoCard = ({ videoInfo }) => {
  const { video } = videoInfo;
  return (
    // KULLANICI KARATA BASARSA ONU DETAY SAYFASINMA YÖNLENDİR VE
    // OARAMETRE OLARAK LİNKE VİDEONUN İDSİNİ KOY
    <Link className="w-full" to={`/watch/${video?.videoId}`}>
      <div className=" cursor-pointer ">
        <img className=" w-full rounded my-4 " src={video.thumbnails[0].url} />
        <div className="flex gap-3">
          <img
            className="rounded-full w-[50px] h-[50px]"
            src={video.author.avatar[0].url}
          />
          <div>
            <p title={video.descriptionSnippet}>{video.title}</p>
            <p className="flex items-center ">
              <span> {video.author.title}</span>
              {video?.author?.badges[0]?.text === "Doğrulandı" && (
                <BsFillPatchCheckFill className=" text-blue-600 mx-2" />
              )}
            </p>
            <div className="flex gap-3">
              <p title={video.stats.views}>{millify(video.stats.views)}</p>
              <p>{video.publishedTimeText}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
