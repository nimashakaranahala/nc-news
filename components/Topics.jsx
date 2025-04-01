import { useState, useEffect } from "react";
import { getTopics } from "../api";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    getTopics()
      .then((res) => {
        setTopics(res.data.topics);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch topics");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2 className="sub-heading">Topics</h2>
      {loading && <p>Hi I am Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul className="container">
        {topics.map((topic, index) => (
          <li key={index} className="category-card">
            <strong>{topic.slug}</strong> 
            {topic.img_url && <img src={topic.img_url} alt={topic.slug}/>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Topics;
