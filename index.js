// import { v4 as uuid } from 'uuid';
const uuid = require('uuid/v4');
const emoji = require('./emoji.json');

const someUuid = uuid();

console.log(Object.keys(emoji).length);
