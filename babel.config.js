module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: [ './src' ],
          extensions: ['.ts', '.tsx', '.js' , '.json'],
          alias: {
            '@components': './src/components',
            '@constants': './src/constants',
            '@screens': './src/screens',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
            '@navigation': './src/navigation',
          }
        }
      ]
    ]
  };
};
