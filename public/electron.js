const { app, BrowserWindow } = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 300,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    },
    show: false,
    icon: './icon.ico'
  });

  win.removeMenu();
  win.loadURL(
    isDev 
    ? 
    'http://localhost:3000/' 
    : 
    `file://${path.join(__dirname, '../build/index.html')}
  `);

  if (isDev) {
    win.webContents.openDevTools();
  }

  win.on('closed', () => win = null);

  win.once('ready-to-show', () => {
    win.show();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});