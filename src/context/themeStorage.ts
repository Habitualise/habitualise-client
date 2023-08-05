import {MMKVLoader} from 'react-native-mmkv-storage';

const themeStorage = new MMKVLoader().withInstanceID('theme').initialize();

export const setTheme = (isDark: boolean) => {
  themeStorage.setString('theme', isDark ? 'dark' : 'light');
};

export const getTheme = () => {
  const theme = themeStorage.getString('theme');
  return theme === 'dark';
};

export default themeStorage;
