import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async() => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    console.log("error in getting item:" + error);
  }
}