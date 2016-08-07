const { app, BrowserWindow } = require('electron')

let window

app.on('ready', function() {
  window = new BrowserWindow({ width: 800, height: 600 })
  window.loadURL(`file://${__dirname}/index.html`)
  window.on('closed', function() {
    window = null
  })
})

app.on('window-all-closed', function() {
  app.quit()
})
