const withOffline = require('next-offline');

require('dotenv').config();

module.exports = withOffline({
    trailingSlash: true,
    poweredByHeader: false,
    future: {
        webpack5: true
    }
});