import { set } from "date-fns/fp";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "./NewsCard";

const NewsDetails = () => {
  const [filterNews, setFillterNews] = useState([]);
  const newsData = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    if (id == 0) {
      setFillterNews(newsData);
    } else if (id == 1) {
      const breakingNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setFillterNews(breakingNews);
    } else {
      const catagoryId = newsData.filter((news) => news.category_id == id);
      setFillterNews(catagoryId);
    }
  }, [id, newsData]);

  return (
    <div>
      <h3 className="text-2xl font-semibold">
        Total {filterNews.length} News Found
        {filterNews.map((news, i) => (
          <NewsCard key={i} news={news}></NewsCard>
        ))}
      </h3>
    </div>
  );
};

export default NewsDetails;
