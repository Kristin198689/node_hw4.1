// date-format.js
const moment = require("moment");

// Получение текущей даты и времени
const currentDate = moment();

// Форматирование в различных форматах
console.log("Текущая дата (DD-MM-YYYY):", currentDate.format("DD-MM-YYYY"));
console.log("Текущая дата (MMM Do YY):", currentDate.format("MMM Do YY"));
console.log("Текущий день недели:", currentDate.format("dddd"));
