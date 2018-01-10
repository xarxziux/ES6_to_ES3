// import 'babel-polyfill';

// import * as JSON from 'json3';
import * as JSON from 'JSON2';
// import * as JSON from './src/modules/json2.js';

const log = message => WScript.echo (message);
const obj = {a: 10, b: 12};

log (`typeof JSON = ${typeof JSON}`);
log (`obj = ${JSON.stringify (obj)}`);
