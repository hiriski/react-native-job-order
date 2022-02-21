const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module:react-native-dotenv',
      {
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@app': path.resolve(__dirname, 'src'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@layouts': path.resolve(__dirname, 'src/components/layouts'),
          '@providers': path.resolve(__dirname, 'src/components/providers'),
          '@screens': path.resolve(__dirname, 'src/screens'),
          '@navigations': path.resolve(__dirname, 'src/navigations'),
          '@constants': path.resolve(__dirname, 'src/constants'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
          '@contexts': path.resolve(__dirname, 'src/contexts'),
          '@store': path.resolve(__dirname, 'src/store'),
          '@utils': path.resolve(__dirname, 'src/utils'),
        },
      },
    ],
  ],
};
