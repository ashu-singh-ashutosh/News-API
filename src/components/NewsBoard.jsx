import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [article, setarticle] = useState([]);
  useEffect(() => {
    fetchApi();
  }, [category]);
  async function fetchApi() {
    const result = await (category == "home"
      ? fetch("https://saurav.tech/NewsAPI/everything/bbc-news.json")
      : fetch(
          `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`,
          { method: "GET" },
        ));
    const array = await result.json();
    console.log(array.articles);
    setarticle(array.articles);
  }
  return (
    <div>
      <h1 className="text-center">
        <span>
          Latest <span className="badge bg-danger">News</span>
        </span>
      </h1>
      <div className="bg-secondary mx-1 px-6" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {article.map((news, index) => {
          return (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsBoard;
