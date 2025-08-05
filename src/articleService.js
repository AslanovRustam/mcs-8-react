import axios from "axios";

export const fetchArticles = async (searchTopic, currentPage = 1) => {
  const response = await axios.get(`https://hn.algolia.com/api/v1/search`, {
    params: {
      query: searchTopic,
      page: currentPage,
      hitsPerPage: 5,
    },
  });

  return response.data;
};
