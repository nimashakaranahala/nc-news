import { useState, useEffect } from "react";
import { getArticles } from "../api";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getArticles()
      .then((res) => {
        setArticles(res.data.articles);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch articles.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="articles-container">
      <h2>Articles</h2>

      {loading && <p>Loading articles...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul className="articles-list">
        {articles.map((article) => (
          <li key={article.article_id} className="article-card">
            <img src={article.article_img_url} alt={article.title} />
            <h3>{article.title}</h3>
            <p>
              <strong>By:</strong> {article.author}
            </p>
            <p>
              <strong>Topic:</strong> {article.topic}
            </p>
            <p>
              <strong>Votes:</strong> {article.votes}
            </p>
            <p>
              <strong>Comments:</strong> {article.comment_count}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
