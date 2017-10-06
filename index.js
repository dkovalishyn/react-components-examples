import config from './config/config.json';
import * as models from './models';
import Importer from './importer.js';

console.log(`${config.name} started...`);
const user = new models.User();
const product = new models.Product();
const importer = new Importer();
importer.init();
