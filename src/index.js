// import 'babel-polyfill';
// import './modules/polyfill.js';
// import 'json3';
import {sum} from './modules/math.js';

const a = 10;
const b = 12;

WScript.echo (`${a} + ${b} = ${sum (a, b)}`);

// const obj = {a, b};

// WScript.echo (`typeof JSON = ${typeof JSON}`);
// WScript.echo (`obj = ${JSON.stringify (obj)}`);
