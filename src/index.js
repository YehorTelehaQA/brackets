module.exports = function check(str, bracketsConfig) {
  const strArr = str.split('');
  return strArr.every((elem) => elem == bracketsConfig);
}
