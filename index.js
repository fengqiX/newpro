var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow;

var mainWindow;

app.on('ready',function(){
    mainWindow = new BrowserWindow({
        width:1000,
        height:600,
        frame:false,
        alwaysOnTop:true,
        skipTaskbar:false,
    }) ;
    mainWindow.loadURL('file://'+__dirname+'/index.html');
});

