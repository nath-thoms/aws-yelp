const request = require('request-promise');

module.exports = (businessName) => {
    // https://www.yelp.co.uk/biz/waterstones-manchester

    const url = `https://www.yelp.co.uk/biz/${businessName}`;
    return request({ method: 'GET', url: url});

};