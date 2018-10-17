const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 630
  });

  mainWindow.setResizable(false);

  mainWindow.loadURL('http://localhost:3000');


  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

/* For macOS; quit the application if all of the windows have been closed */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null){
    createWindow();
  }
});