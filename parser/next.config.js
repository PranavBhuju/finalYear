/** @type {import('next').NextConfig} */
const nextConfig = {
  // Nextjs has an issue with pdfjs-dist which optionally uses the canvas package
  // for Node.js compatibility. This causes a "Module parse failed" error when
  // building the app. Since pdfjs-dist is only used on client side, we disable
  // the canvas package for webpack
  // https://github.com/mozilla/pdf.js/issues/16214
  output: 'standalone',
  webpack: (config) => {
    // Setting resolve.alias to false tells webpack to ignore a module
    // https://webpack.js.org/configuration/resolve/#resolvealias
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  async headers() {
    return [
      {
        // Allow requests from the origin where your React application is hosted
        source: '/',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'http://localhost:3000', // Replace with your React application's origin
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS, PUT, DELETE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type, Authorization',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
