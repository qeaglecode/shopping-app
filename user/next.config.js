const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  // react 18 about strict mode https://reactjs.org/blog/2022/03/29/react-v18.html#new-strict-mode-behaviors
  // enable for testing purpose
  reactStrictMode: false,
  distDir: 'build',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors. in development we need to run yarn lint
    ignoreDuringBuilds: true
  },
  poweredByHeader: false,
  swcMinify: false,
  // custom config, just need to update next.config file. use in many cases
  serverRuntimeConfig: {
    // Will only be available on the server side
    API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8080'
  },
  publicRuntimeConfig: {
    API_ENDPOINT: process.env.API_ENDPOINT || 'http://localhost:8080',
    SOCKET_ENDPOINT: process.env.SOCKET_ENDPOINT || process.env.API_ENDPOINT,
    // Will be available on both server and client
    MAX_VIDEO_BITRATE_KBPS: 900,
    IMAGE_ACCPET: '.jpeg, .jpg, .png',
    MAXIMUM_SIZE_UPLOAD_AVATAR: '2',
    DEBUG: false
  },
  async rewrites() {
    return [
      {
        source: '/home',
        destination: '/home',
      },
      {
        source: '/introduce',
        destination: '/introduce'
      },
      {
        source: '/procedure',
        destination: '/procedure'
      },
      {
        source: '/project',
        destination: '/project'
      },
      {
        source: '/products',
        destination: '/products'
      },
      {
        source: '/contact',
        destination: '/contact'
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
