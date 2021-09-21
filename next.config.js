const { resolve } = require("path")

module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": resolve(__dirname),
    }

    return config
  },
}
