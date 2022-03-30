
const withTM = require('next-transpile-modules')(['@splinetool/react-spline', '@splinetool/runtime']);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['posterity.mypinata.cloud'],
  },
})

