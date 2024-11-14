/* eslint-disable react/prop-types */

import { AiFillStar } from "react-icons/ai";
import { FaEye, FaShareAlt, FaBookmark } from "react-icons/fa";

const SingelNews = ({ news }) => {
    
    // console.log(props);
    console.log(news);
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src={news.author.img}
            alt="Author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{news.author.name}</h2>
            <p className="text-gray-500 text-sm">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-500">
          <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg my-2">{news.title}</h3>

      {/* Thumbnail */}
      <img
        src={news.thumbnail_url}
        alt="Thumbnail"
        className="w-full h-48 object-cover  rounded-lg mb-4"
      />

      {/* Details */}
      <p className="text-gray-500 text-sm mb-2">
        {news.details.slice(0, 150)}...{" "}
        <span className="text-red-500">Read More</span>
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 border-t pt-2">
        <div className="flex items-center text-yellow-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <p className="font-semibold ml-1">{news.rating.number}</p>
        </div>
        <div className="flex items-center text-gray-400">
          <FaEye />
          <p className="ml-1 text-sm">{news.total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default SingelNews;
