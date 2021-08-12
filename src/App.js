import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "./api";
import { FETCH_ARTICLES } from "./constants/actionTypes";
import "./App.css";

function App() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  console.log(articles, "<<<<");

  const fetchArticles = async () => {
    try {
      const response = await getArticles();
      dispatch({ type: FETCH_ARTICLES, payload: response.data.data });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="App">
      <button onClick={fetchArticles}>Fetch Articles</button>
      {articles.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>{article.author}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
