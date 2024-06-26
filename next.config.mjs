// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: [
//       "avatars.githubusercontent.com",
//       "lh3.googleusercontent.com",
//       "res.cloudinary.com",
//       "images.pexels.com",
//     ],
//   },
// };

// export default nextConfig;

// next.config.js
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import webpack from "webpack";

const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "images.pexels.com",
    ],
  },
  webpack: (config, { isServer }) => {
    // Ignore specific modules
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\/(node-gyp|npm)\//,
      })
    );

    // Add polyfills for node modules
    config.plugins.push(new NodePolyfillPlugin());

    // Exclude HTML files from being processed
    config.module.rules.push({
      test: /\.html$/,
      use: "ignore-loader",
    });

    return config;
  },
  reactStrictMode: true,
};

export default nextConfig;
