///

// type ParamObject = Record<string, string>;

function getObjectKey<T extends Object>(obj: T) {
  return Object.keys(obj);
}
function getObjectValues<T extends Object>(obj: T) {
  return Object.values(obj);
}
function getArrayToObject(stringArray: string[]) {
  return stringArray.reduce((prev, curet) => {
    prev[curet] = "";
    return prev;
  }, {} as Record<string, string>);
}
function getArrayStringToString(stringArray: string[]) {
  return stringArray.reduce((prev, current) => prev + current);
}
function getCountArrayString(stringArray: string[]) {
  return stringArray.reduce(
    (prev, current) => {
      if (current.trim().length > 0) {
        prev++;
      }
      return prev;
    },

    0
  );
}

export {
  getArrayToObject,
  getArrayStringToString,
  getObjectKey,
  getObjectValues,
  getCountArrayString,
};
