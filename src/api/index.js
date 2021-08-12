import axios from "axios";

const apiEndPoint = "https://jsonmock.hackerrank.com/api/articles";

export const getArticles = () => axios.get(apiEndPoint);
