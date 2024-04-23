import {createRef} from 'react';

export const navigationRef: any = createRef();

const navigate = (name: string, params: string) => {
  if (navigationRef.current) {
    return navigationRef?.current?.navigate(name, params);
  }
};

const goBack = () => {
  if (navigationRef.current) {
    return navigationRef.current?.goBack?.();
  }
};

export default {
  navigate,
  goBack,
};
