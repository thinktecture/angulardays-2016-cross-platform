'use strict';

const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');

let mainWindow;
let trayApp;

app.on('window-all-closed', () => {
    app.quit();
});

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        title: 'BoardZ2',
        width: 1024,
        minWidth: 768,
        height: 700,
        titleBarStyle: 'hidden',
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.setTitle(app.getName());

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});