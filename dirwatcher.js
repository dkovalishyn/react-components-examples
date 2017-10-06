import fs from 'fs';
import events from 'events';

class DirWatcher extends events.EventEmitter {
    constructor(path, delay) {
        super();
        this.path = path;
        this.delay = delay;
        this.files = [];
        this.watch = this.watch.bind(this);
    }

    start() {
        if (this.timer) {
            this.timer.ref();
        } else {
            this.timer  = setInterval(this.watch, this.delay);
        }
    }

    stop() {
        this.timer.unref();
    }

    watch() {
        fs.readdir(this.path, (err, files) => {
            if (err) {
                console.log(err);
            }

            const newFiles = files.filter(file => !this.files.includes(file));
            if (newFiles.length > 0) {
                this.files = files;
                newFiles.forEach((file) => {
                    this.emit('dirwatcher:changed', `${this.path}/${file}`);
                })
            }
        })
    }
}


module.exports = DirWatcher;