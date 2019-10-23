module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};
