import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessToken = await AsyncStorage.getItem(`${this.namespace}:token`);
    return accessToken ? JSON.parse(accessToken) : null;
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    try {
      const jsonValue = JSON.stringify(accessToken);
      return await AsyncStorage.setItem(`${this.namespace}:token`, jsonValue);
    } catch (e) {
      // save error
      console.log("Error setAccessToken", accessToken);
    }
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    return await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
