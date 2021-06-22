function convert() {
  let result = [];
  let arg;
  for (let i = 0; i < arguments.length; i++) {
    arg = arguments[i];
    result[i] = typeof arg === "string" ? Number(arg) : typeof arg === "number" ? String(arg) : arg;
  }
  return result;
}

const executeforEach = (array, func) => {
  array.forEach(func);
};

const mapArray = (array, func) => {
  return array.map(item => {
    let arg = typeof item === "number" ? item : Number(item)
    return func(arg);
  })
};

const filterArray = (array, func) => {
  return array.filter(func);
};

const flipOver = (str) => {
  return str.split("").reverse().join("");
};

const makeListFromRange = (range) => {
  if (range.length === 2) {
    let result = [];
    let len = Math.abs(range[1] - range[0]) + 1;
    for (let i = 0; i < len; i++) {
      result[i] = range[0] + ((range[1] > range[0]) ? i : -i);
    }
    return result;
  }
  return range;
};

const getArrayOfKeys = (array, key) => {
  return array.map(item => item[key]);
};

const substitute = (array) => {
  return mapArray(array, function (item) {
    return item < 30 ? '*' : item;
  });
};

const getPastDay = (date, amountOfDaysAgo) => {
  let pastDay = new Date();
  pastDay.setDate(date.getDate() - amountOfDaysAgo);
  return pastDay.getDate();
};

const formatDate = (date) => {
  return date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + ("0" + date.getDate()).slice(-2) + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
};

module.exports = {
  convert,
  executeforEach,
  mapArray,
  filterArray,
  flipOver,
  makeListFromRange,
  getArrayOfKeys,
  substitute,
  getPastDay,
  formatDate,
};
