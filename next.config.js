// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// const webpack = require('webpack');
// module.exports = {
// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
// config.plugins.push(new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery'
//     }))
// return config;
// }}

// 


const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define your Next.js configuration here
  // ...
}

module.exports = {
  ...nextConfig,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }));
    return config;
  }
}
