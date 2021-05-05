const axios = require('axios')
const cheerio = require('cheerio')

const getReviews = async () => {
  const { data } = await axios.get(`http://localhost:5000/:crusader`)
  const $ = await cheerio.load(data)
  var wordMap = new Map()

  $('.apphub_CardTextContent').each((i, el) => {
    var review = $(el).text().substring(40).trimStart()
    var reviewArr = review.split(' ')
    reviewArr.forEach(word => {
      if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1)
      } else {
        wordMap.set(word, 1)
      }
    })
  })

  return wordMap
}

export default getReviews