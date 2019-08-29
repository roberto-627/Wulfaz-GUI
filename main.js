const { app, ipcMain } = require('electron');
const Window = require('./Window');

var loginWindow

function login(){
    loginWindow = new Window({
        webPreferences: {
            nodeIntegration: true
        },
        file: 'login.html'
    })
}

function show(){
    let show = new Window({
        file: 'index.html'
    })
}

function add(){
    let add = new Window({
        file: 'add.html'
    })
}

function edit(){
    let edit = new Window({
        file: 'edit.html'
    })
}

ipcMain.on('login:username', (e, username) => {
    console.log(username);
    show();
    loginWindow.close();
});

app.on('ready', login);

app.on('window-all-closed', function(){
    app.quit();
});