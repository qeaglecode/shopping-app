/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass')

const nextConfig = {
  // react 18 about strict mode https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
  // enable for testing purpose
  reactStrictMode: false,
  distDir: 'build',
  eslint: {
    // Ignore eslint when building production. in development we need to run yarn lint
    ignoreDuringBuilds: true
  },
  poweredByHeader: false,

  // By opting in minification will happen using the SWC minifier instead of Terser.
  swcMinify: false,

  // custom config, just need to update next.config file. use in many cases
  serverRuntimeConfig: {
    // Will only be available on the server side
    REACT_APP_API_ENDPOINT: process.env.API_SERVER_ENDPOINT || process.env.REACT_APP_API_ENDPOINT
  },
  publicRuntimeConfig: {
    REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
    SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT || process.env.REACT_APP_API_ENDPOINT,
    
    // Will be available on both server and client
    MAX_VIDEO_BITRATE_KBPS: 900,
    IMAGE_ACCPET: '.jpeg, .jpg, .png',
    MAXIMUM_SIZE_UPLOAD_AVATAR: '2',
    DEBUG: false
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/Home'
      },
    ];
  }
};

module.exports = withPlugins([
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    }
  }),
  nextConfig
]);
