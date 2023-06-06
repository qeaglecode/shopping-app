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
    // Will be available on both server and client
    API_ENDPOINT: process.env.API_ENDPOINT,
    SITE_URL: process.env.SITE_URL,
    MAX_SIZE_IMAGE: process.env.MAX_SIZE_IMAGE || 5,
    MAX_SIZE_FILE: process.env.MAX_SIZE_FILE || 1000,
    MAX_SIZE_TEASER: process.env.MAX_SIZE_TEASER || 1000,
    MAX_SIZE_VIDEO: process.env.MAX_SIZE_VIDEO || 2000,
    IMAGE_ACCPET: process.env.IMAGE_ACCPET || 'image/*',
    SOUND_ACCEPT: process.env.SOUND_ACCEPT || 'audio/*',
    VIDEO_ACCEPT: process.env.VIDEO_ACCEPT || 'video/*,.mkv'
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
