const { app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 300,
    height: 200,
    webPreferences: {
      nodeIntegration: true
    },
    show: false
  });

  win.removeMenu();
  win.loadURL('http://localhost:3000/');
  win.once('ready-to-show', () => {
    win.show();
  })
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