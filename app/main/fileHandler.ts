const pathHandler = require('path')
const fsHandler = require('fs-extra')
const dataurl = require('dataurl')
const isValid = require('is-valid-path')

class FileHandler {
  public async readFolder(pathData) {
    try {
      const validation = this.validatePath(pathData)

      if (validation) {
        const response = await fsHandler.readDir(pathHandler.join(pathData))
        return response
      }

      return 'invalid path'
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error)
    }
  }

  public async readFile(filePath) {
    try {
      const validation = this.validatePath(filePath)

      if (validation) {
        const response = await fsHandler.readFile(filePath)
        return response
      }

      return 'invalid path'
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error)
    }
  }

  public async readSong(songPath) {
    try {
      const data = await this.readFile(songPath)
      return dataurl.convert({ data, mimetype: 'audio/mp3' })
    } catch (error) {
      // tslint:disable-next-line: no-console
      console.log(error)
    }
  }

  private validatePath(pathData) {
    return isValid(pathData)
  }
}

module.exports = FileHandler
