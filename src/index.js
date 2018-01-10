import 'babel-polyfill';
// import './modules/polyfill.js';
import * as JSON from 'json3';
// import * as JSON from 'json2';
import {sum} from './modules/math.js';

const log = message => WScript.echo (message);

const a = 10;
const b = 12;

log (`${a} + ${b} = ${sum (a, b)}`);

const obj = {a, b};

log (`typeof JSON = ${typeof JSON}`);
log (`obj = ${JSON.stringify (obj)}`);

const arr = [1, 2, 3, 4, 5];

log (`Sum = ${arr.reduce ((accum, next) => accum + next)}`);
log ('Hello World!');
