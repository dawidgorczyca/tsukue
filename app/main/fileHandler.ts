const electron = require('electron')
const path = require('path')
const fs = require('fs-extra')
const isValid = require('is-valid-path')

class FileHandler {

  public async readFolder(pathData) {
    try {
      const validation = this.validatePath(pathData)

      if (validation) {
        const response = await fs.readDir(path.join(pathData))
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
        const response = await fs.readFile(filePath)
        return response
      }

      return 'invalid path'
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
