const { BrowserWindow } = require('electron');

const defaultProperties = {
    width: 800,
    height: 600,
    show: false
};

class Window extends BrowserWindow {
    constructor ({ file, ...windowSettings }) {
        super({ ...defaultProperties, ...windowSettings });

        this.loadFile(file);
        this.webContents.openDevTools();

        this.once('ready-to-show', () => {
            this.show();
        });
    }
};

module.exports = Window;