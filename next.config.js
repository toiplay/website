const withOffline = require('next-offline');

const LicensePlugin = require('webpack-license-plugin');

module.exports = withOffline({
    trailingSlash: true,
    poweredByHeader: false,
    webpack5: true,
    i18n: {
        locales: [
            'de',
            'en'
        ],
        defaultLocale: 'de'
    },
    webpack: (config) => {
        if(config.mode === 'production') {
            config.plugins.push(new LicensePlugin({
                excludedPackageTest: (packageName, version) => {
                    return packageName.startsWith('@types/') || packageName.startsWith('@krahforst/');
                },
                outputFilename: '../public/licenses.json',
                replenishDefaultLicenseTexts: true
            }));
        }
        return config;
    }
});