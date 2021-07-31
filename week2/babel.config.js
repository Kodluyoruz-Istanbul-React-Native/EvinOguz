module.exports = {
  presets: ['module:metro-react-native-babel-preset'],

  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '_',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '_screens',
            rootPathSuffix: 'src/screens/index',
          },
          {
            rootPathPrefix: '_assets',
            rootPathSuffix: 'src/assets/index',
          },
        ],
      },
    ],
  ],
};
