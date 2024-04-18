import Toast from 'react-native-toast-message';

const showToast = (type: string, text1 = '', text2 = '') => {
  Toast.show({
    type,
    text1,
    text2,
  });
};

export {showToast};
