import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_CREDENTIALS_KEY = "@UserCredentials";

const setStorageItem = async (key: string, data: any) => {
  if (typeof key !== "string" || !data) return;
  return await AsyncStorage.setItem(key, JSON.stringify(data));
};

const getStorageItem = async (key: string) => {
  if (typeof key !== "string") return;
  const data = await AsyncStorage.getItem(key);
  if (!!data) return JSON.parse(data);
};

const removeStoageItem = async (key: string) => {
  if (typeof key !== "string") return;
  return await AsyncStorage.removeItem(key);
};

export {
  setStorageItem,
  getStorageItem,
  removeStoageItem,
  USER_CREDENTIALS_KEY,
};
