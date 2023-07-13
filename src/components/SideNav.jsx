import { categories } from "../utils/constants";
import { useContext } from "react";
import { YoutubeContext } from "../context/YoutubeContext";
const SideNav = () => {
  // Contexte Abone olma burası
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <nav className="flex flex-col  pt-4">
      {categories.map((item) => (
        <>
          <div
            // SEÇ,LEN KATEGPRİYİ CONTEXTE GÖNDERME
            onClick={() => setSelectedCategory(item.name)}
            // EĞERKİ SEÇİLEN KATEGORİ EKRAN BASTIĞIMINKİYLE ETKİLEŞİRSE
            className={` ${selectedCategory === item.name && "bg-blue-600"}
              flex items-center gap-2 p-2 py-5 text-lg cursor-pointer hover:bg-gray-800`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {/* eğerki objenin dividr değeri true ise ekrana çizgi bas */}
          {item.divider && <hr />}
        </>
      ))}
    </nav>
  );
};

export default SideNav;
