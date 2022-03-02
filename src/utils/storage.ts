// import MMKVStorage from 'react-native-mmkv-storage';
// import { MMKV } from 'react-native-mmkv';
// export const storage = new MMKV();
import AsyncStorage from '@react-native-async-storage/async-storage';

// export const MMKVwithEncryption = new MMKVStorage.Loader().withEncryption().initialize();

export const clearAsyncStorage = async (): Promise<boolean | void> => {
  const result = await AsyncStorage.clear();
  return result;
};
