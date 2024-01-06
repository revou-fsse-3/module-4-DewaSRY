/**
 *
 * @param str
 * @returns
 */
function getStringCamelCaseHaveSpaces(str: string) {
  const getUpperChase = str.match(/[A-Z]/g);
  if (getUpperChase === null) return str;
  const newString = str.replace(
    /[A-Z]/,
    " " + getUpperChase[0].toLocaleLowerCase()
  );
  return getStringCamelCaseHaveSpaces(newString);
}
function getUpperCHaseStringAfterSpace(str: string): string {
  return str
    .split(" ")
    .map((s) => s[0].toLocaleUpperCase() + s.slice(1))
    .join(" ");
}

function getStringCamelChaseToLabel(str: string) {
  return getUpperCHaseStringAfterSpace(getStringCamelCaseHaveSpaces(str));
}
export {
  getStringCamelCaseHaveSpaces,
  getStringCamelChaseToLabel,
  getUpperCHaseStringAfterSpace,
};
