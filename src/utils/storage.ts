import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAsyncStorage = async (): Promise<boolean | void> => {
  const result = await AsyncStorage.clear();
  return result;
};
