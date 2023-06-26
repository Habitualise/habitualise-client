module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@/features/*/*'],
      },
    ],
  },
};
