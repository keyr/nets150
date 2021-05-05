const axios = require("axios");
const cheerio = require("cheerio");

const getReviews = async (gameTitle) => {
  const { data } = await axios.get(`http://localhost:5000/${gameTitle}`);
  console.log(data);
  return data;
};

export default getReviews;

