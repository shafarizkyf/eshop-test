module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src', './assets'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@images': './assets/images',
          '@lottie': './assets/lottie',
          '@svg': './assets/svg',
          '@components': './src/components',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
