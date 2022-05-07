const withTM = require("next-transpile-modules")(["react-spring"]);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /react-spring/,
      sideEffects: true,
    });
    return config;
  },
  experimental: {
    runtime: "nodejs",
  },
  reactStrictMode: true,
  images: {
    domains: ["posterity.mypinata.cloud"],
  },
});
