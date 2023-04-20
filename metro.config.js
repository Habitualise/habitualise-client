/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    babelTransformerPath: require.resolve(
      'metro-react-native-babel-transformer',
    ),
  },
  resolver: {
    sourceExts: ['js', 'json', 'jsx', 'ts', 'tsx'],
  },
};
