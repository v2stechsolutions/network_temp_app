export function notEmpty(value: any): boolean {
  return notNullUndefined(value) && value.trim() !== '';
}

export function notNullUndefined(value: any): boolean {
  return value !== null && value !== undefined;
}

export function isArrayLength(array: any): boolean {
  return isArray(array) && array.length > 0;
}

export function isArray(array: any): boolean {
  return notNullUndefined(array) && Array.isArray(array);
}

export const isOnlyNumber = (value: string) => {
  // const regex= new RegExp(/^[0-9]+$/);  // alternative regex for only number
  const regex = new RegExp(/^\d+$/);
  return regex.test(value);
};

export const isAmount = (value: string) => {
  const regex = new RegExp(/^\d+$/);

  if (regex.test(value)) {
    const tempAmount = +value;
    return tempAmount != 0;
  }

  return false;
};
