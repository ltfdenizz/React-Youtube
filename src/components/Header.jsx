import { useState } from "react";
import { FaBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/results/?search_query=${query}`);
  // };
  return (
    <header className="flex justify-between items-center p-2 sticky">
      <Link to={"/"}>
        <div className=" flex items-center">
          <img
            className="w-[80px]"
            src="https://www.svgrepo.com/show/13671/youtube.svg"
          />
          <h1 className=" ml-1 text-white text-2xl">Youtube</h1>
        </div>
      </Link>

      <form className=" bg-white rounded flex items-center ">
        <input
          className="px-4 py-1 rounded focus:outline-none text-black "
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link
          to={`/results/?search_query=${query}`}
          // onClick={handleClick}
          className=" mr-2"
        >
          <FaSearch className=" text-black" />
        </Link>
      </form>
      <FaBell className="mr-4" />
    </header>
  );
};

export default Header;
