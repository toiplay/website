const withOffline = require('next-offline');
// const withPWA = require('next-pwa');

module.exports = withOffline({
    trailingSlash: true,
    poweredByHeader: false,
    future: {
        webpack5: true,
    }
});