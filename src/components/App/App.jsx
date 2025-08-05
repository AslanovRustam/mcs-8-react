import { Toaster } from "sonner";
import css from "./App.module.css";
import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticles } from "../../articleService";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchTopic, setSearchTopic] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = topic => {
    setSearchTopic(topic);
    setCurrentPage(1);
    setArticles([]);
  };

  const changePage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchTopic === "") {
      return;
    }

    async function getArticles() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(searchTopic, currentPage);
        setArticles(prevState => [...prevState, ...data.hits]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getArticles();
  }, [currentPage, searchTopic]);

  return (
    <div className={css.container}>
      <SearchForm onSearch={handleSearch} />
      {isLoading && <strong>Loading articles...</strong>}
      {isError && <strong>Error...</strong>}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && !isLoading && (
        <button onClick={changePage}>Load more</button>
      )}
      <Toaster position="top-center" duration={2000} richColors closeButton />
    </div>
  );
}
