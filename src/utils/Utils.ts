import {Platform} from 'react-native';

export const start = (value: string): string => `${value}_START`;
export const success = (value: string): string => `${value}_SUCCESS`;
export const fail = (value: string): string => `${value}_FAIL`;

export const isIOS = (): boolean => Platform.OS === 'ios';

export const prepareUserDetails = user => {
  const userData = {
    profile_picture: user?.profile_picture,
    full_name: user?.full_name,
    seller_email: user?.seller_email,
    mobile_number: user?.mobile_number,
    id: user?.id,
    seller_reg_no: user?.seller_reg_no,
  };

  return {...userData};
};

export const convertDateAndTime = (dateTime: string) => {
  const parts = dateTime.split(' ');
  const [datePart, timePart] = parts;
  // const datePart = parts[0];
  // const timePart = parts[1];

  // Split the date into day, month, and year
  const dateParts = datePart.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);

  // Split the time into hours and minutes
  const timeParts = timePart.split(':');
  const hours = parseInt(timeParts[0], 10);
  const minutes = parseInt(timeParts[1], 10);

  // Create a new Date object with the specified date and time
  const dateTimeObj = new Date(year, month - 1, day, hours, minutes);
  return dateTimeObj;
};

export const noDataAvailable = (content: string) =>
  `No ${content.toLowerCase()} available`;
