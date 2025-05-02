import { FaShareAlt, FaEye, FaStar, FaRegBookmark } from "react-icons/fa";
import { format } from "date-fns";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { title, details, thumbnail_url, author, rating, total_view, id } =
    news;

  return (
    <div className="bg-white shadow-md rounded-md py-4 space-x-2 mb-6">
      {/* Top author section */}
      <div className="flex justify-between bg-base-200 px-4 py-2 items-center mb-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <FaRegBookmark className="text-gray-500 cursor-pointer"></FaRegBookmark>
          <FaShareAlt className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-snug mb-3">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      {/* Details */}
      <p className="text-sm text-gray-700 mb-2">
        {details.length > 250 ? `${details.slice(0, 250)}...` : details}
      </p>

      {/* Read More */}
      <Link
        to={`/news/${id}`}
        className="text-orange-500 font-semibold text-sm block mb-3"
      >
        Read More
      </Link>

      {/* Rating and Views */}
      <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-2 mt-2">
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: Math.round(rating?.number || 0) }).map(
            (_, index) => (
              <FaStar key={index} />
            )
          )}
          <span className="text-gray-700 ml-2">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
