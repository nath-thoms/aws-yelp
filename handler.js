'use strict';
const { getPage, parsePage, saveRatingsToDB } = require('./utils');

module.exports.scrape = async (event, context) => {

  // 1. Fetch Yelp page
  getPage(event)
  // 2. Parse Yelp page
    .then(page => parsePage(page))
  // 3. Save ratings to DB
    .then(yelpData => saveRatingsToDB(yelpData, event))
    .then(() => callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: `Scraped ${event}`,
        input: event,
      })
    }))
    .catch(error => 
      callback(new Error(`Error scraping ${event} : ${JSON.stringify(error)}`))
    );

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
