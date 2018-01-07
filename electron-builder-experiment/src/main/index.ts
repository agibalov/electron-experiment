import { app, BrowserWindow } from 'electron'

let mainWindow: BrowserWindow | null;

function createMainWindow() {
    const window = new BrowserWindow();
    window.webContents.openDevTools();

    const isDevelopment = process.env.NODE_ENV !== 'production';
    const url = isDevelopment
        ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
        : `file://${__dirname}/index.html`;
    window.loadURL(url);

    window.on('closed', () => {
        mainWindow = null;
    });

    return window;
}

app.on('window-all-closed', () => {
    app.quit();
});

app.on('ready', () => {
    mainWindow = createMainWindow();
});
