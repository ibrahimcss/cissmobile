import NativeAsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
var serverUrl ='http://192.168.1.49:8080';

global.postMethod = function(body) {
  return new Promise(resolve => {
    fetch(serverUrl+"/api/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(response => response.json())
      .then(response => {
        resolve(response);

      });
  });

};
global.loginWithToken = function(token) {
  return new Promise(resolve => {
    axios.get(serverUrl+'/api/authenticate', {
      headers: {
        'Authorization': "Bearer " + token
      }
    })
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        resolve(false)
      });

  });

};

global._storeData = function(key, value) {
  try {
    NativeAsyncStorage.setItem(
      key, value,
    );
    return true;
  } catch (error) {
    return error;
  }
};
global._retrieveData = function(item) {
  try {
    const value = NativeAsyncStorage.getItem(item);
    if (value !== null) {
      return value;
    }
  } catch (error) {
    return error;
  }
};
