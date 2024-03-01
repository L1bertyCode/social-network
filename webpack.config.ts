import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

module.exports = {
 mode: "development",
 entry: {
  main: path.resolve(__dirname, "src", "index.tsx"),
 },
 output: {
  path: path.resolve(__dirname, "./build"),
  filename: "[name].[contenthash].js",
  clean: true,
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(
    __dirname,
    "public",
    "index.html"
   ),
  }),
 ],
 module: {
  rules: [
   {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
   },
   {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
     {
      loader: "file-loader",
     },
    ],
   },
   {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
   },
  ],
 },
 resolve: {
  extensions: [".tsx", ".ts", ".js"],
  preferAbsolute: true,
  alias: {
   "@": path.resolve(__dirname, "src"),
  },
 },
 devtool: "inline-source-map",
 devServer: {
  historyApiFallback: true,
  open: true,
  hot: true,
  port: 8080,
 },
};
