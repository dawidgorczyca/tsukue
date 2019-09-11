const { format } = require('url')

const { BrowserWindow, app, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const { resolve } = require('app-root-path')

const LocalStorage = require('./LocalStore')
const FileService = require('./FileHandler')

const SettingsStorage = new LocalStorage({
  configName: 'leonin-settings',
  defaults: {
    position: [0, 0],
  },
})

const FileSystem = new FileService()

const installExtensions = async () => {
  const installer = require('electron-devtools-installer')
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = ['REACT_DEVELOPER_TOOLS']

  return Promise.all(
    extensions.map((name) => installer.default(installer[name], forceDownload))
    // tslint:disable-next-line:no-console
  ).catch(console.log)
}

app.on('ready', async () => {
  const savedPosition = SettingsStorage.get('position')

  const mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    show: false,
    frame: false,
    movable: true,
    title: 'Leonin - Simple Music',
    x: savedPosition[0],
    y: savedPosition[1],
  })

  if (isDev) {
    await installExtensions()
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
    if (isDev) {
      mainWindow.webContents.openDevTools()
    }
  })

  const devPath = 'http://localhost:1124'
  const prodPath = format({
    pathname: resolve('app/renderer/.parcel/production/index.html'),
    protocol: 'file:',
    slashes: true,
  })
  const url = isDev ? devPath : prodPath

  mainWindow.setMenu(null)
  mainWindow.loadURL(url)

  ipcMain.on('file/readFile', async (event: { sender: { send: (arg0: string, arg1: string) => void } }, arg: any) => {
    const fileData = await FileSystem.readFile(arg)
    event.sender.send('file/readFile/reply', fileData)
  })

  mainWindow.on('move', () => {
    SettingsStorage.set('position', mainWindow.getPosition())
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
