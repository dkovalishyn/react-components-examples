import fs from 'fs';
import util from 'util';
import DirWatcher from './dirwatcher.js';

const readFileAsync = util.promisify(fs.readFile);

class Importer {
    constructor() {
        this.data = {};
        this.read = this.read.bind(this);
        this.import = this.import.bind(this);
        this.importSync = this.importSync.bind(this);
    }

    read(file) {
        this.import(file)
            .then(console.log);
    }

    import(file) {
        return readFileAsync(file)
        .then(data => {
            return Promise.resolve(this.parseCsv(data.toString()));
        })
        .catch(err => {
            console.log('Error reading file: ' + err.message);
        })
    }

    importSync(file) {
        try {
            console.log(`Start reading file ${file}`);
            return this.parseCsv(fs.readFileSync(file).toString());
        } catch (e) {
            console.error("Error reading file: " + e.message);
        }
    }

    parseCsv(data) {
        const cols = data.split(/\n/)[0].split(',');
        const rows =  data.split(/\n/).slice(1).map(row => row.split(','));

        return rows.map(row => cols.reduce((acc, key, i) => {
            return {
                ...acc,
                [key]: row[i],
            }
        }, {}));
    }

    init() {
        console.log('Importer started...');
        const dirWatcher = new DirWatcher('data', 1000);
        dirWatcher.start();
        dirWatcher.on('dirwatcher:changed', this.read);
    }
}

module.exports = Importer;
