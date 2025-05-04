import Toast from 'react-native-simple-toast';

export const toast = (message: string) => {
  Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
};
