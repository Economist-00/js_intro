'use strict';


import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { isWeekend as isSatSun } from "./isWeekend.js";

const today = dayjs();

console.log(today.add(5, 'days').format('<MMMM> <D>'));

console.log(today.add(1, 'month').format('<MMMM> <D>'));

console.log(today.subtract(1, 'month').format('<MMMM> <D>'));

console.log(today.format('dddd'));


console.log(isSatSun(today.format('dddd')));
console.log(isSatSun(today.subtract(2, 'days').format('dddd')));