import { useEffect, useState } from "react";
import axios from "axios";
import { useRef } from "react";

export default function AbortRequestExample() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");

  const abortCtrlRef = useRef(null);

  useEffect(() => {
    if (topic === "") return;

    abortCtrlRef.current = new AbortController();

    async function fetchArticles() {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${topic}`,
          {
            signal: abortCtrlRef.current.signal,
          }
        );
        setArticles(response.data.hits);
      } catch (error) {
        console.log(error);
      }
    }

    fetchArticles();

    return () => {
      abortCtrlRef.current.abort();
    };
  }, [topic]);

  return (
    <>
      <div>
        <button onClick={() => abortCtrlRef.current.abort()}>
          Cancel request
        </button>
        <button onClick={() => setTopic("js")}>JS</button>
        <button onClick={() => setTopic("react")}>React</button>
        <button onClick={() => setTopic("nodejs")}>Nodejs</button>
      </div>
      {articles.length > 0 && (
        <ul>
          {articles.map(article => (
            <li key={article.objectID}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
