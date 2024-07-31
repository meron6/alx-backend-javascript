const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Set mode to 'development' or 'production'
  entry: './js/main.ts', // Entry point for the application
  output: {
    filename: 'bundle.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Clean the output directory before each build
  },
  resolve: {
    extensions: ['.ts', '.js'], // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply this rule to .ts files
        use: 'ts-loader', // Use ts-loader to transpile TypeScript
        exclude: /node_modules/, // Exclude node_modules directory
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Clean the output directory before each build
    new HtmlWebpackPlugin({
      template: 'index.html', // HTML template to use
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // Serve content from the dist directory
    open: true, // Open the browser after server starts
    port: 8080, // Port number for the development server
  },
};
