const axios = require("axios");

const getReviews = async (gameTitle, setWords) => {
  const { data } = await axios.get(`http://localhost:5000/${gameTitle}`);
  setWords(data);
};

export default getReviews;
