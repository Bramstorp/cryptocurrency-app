import axios from 'axios';
import moment from 'moment';

// formatering af vores data i 7 dage
const formatSparkline = (numbers) => {
  // find alt data fra 7 dage siden
  const sevenDaysAgo = moment().subtract(7, 'days').unix();
  // formater alt i vores api ud fra de 7 dage
  let formattedSparkline = numbers.map((item, index) => {
    return {
      x: sevenDaysAgo + (index + 1) * 3600,
      y: item,
    }
  })

  return formattedSparkline;
}

// vores api data som er blevet formateret
const formatMarketData = (data) => {
  // list af vores data
  let formattedData = [];

  // mapper igennem vores api også formater ud fra spikeline i 7 dage og hente så prisen ud
  data.forEach(item => {
    const formattedSparkline = formatSparkline(item.sparkline_in_7d.price)

    // her laver vi så vores json data med api data + spikeline
    const formattedItem = {
      ...item,
      sparkline_in_7d: {
        price: formattedSparkline
      }
    }

    // sætter vores list til formated data fra formattedItem over
    formattedData.push(formattedItem);
  });

  return formattedData;
}

// get kaldt til vores api med async
export const getMarketData = async () => {
  try {
    // get kald til vores data med axios.
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d");
    // sætter data funder i get til data variablen
    const data = response.data;
    // formater vores data så vi får spikeline
    const formattedResponse = formatMarketData(data);
    // returnen data formated.
    return formattedResponse;
  } catch (error) {
    // hvis den fanger en fejl så skriv den ud in consollen
    console.log(error.message);
  }
}