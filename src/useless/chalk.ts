import * as chalk from "chalk";

const { log } = console

export const logElc = (text: string) => log(chalk.hex('#fabd2f').bold(text))
export const logWarn = (text: string) => log(chalk.cyanBright.bold(text))
export const logError = (text: string) => log(chalk.redBright.bold(text))

export const logBgBlck = (text: string) => log(chalk.whiteBright.bgBlack.bold(text))
export const logBgRed = (text: string) => log(chalk.black.bgRed.bold(text))
export const logBgGn = (text: string) => log(chalk.black.bgGreen.bold(text))
export const logBgYllw = (text: string) => log(chalk.black.bgYellow.bold(text))
export const logBgBlu = (text: string) => log(chalk.black.bgBlue.bold(text))
export const logBgMgnt = (text: string) => log(chalk.black.bgMagenta.bold(text))
export const logBgCyn = (text: string) => log(chalk.black.bgCyan.bold(text))
export const logBgWht = (text: string) => log(chalk.black.bgWhite.bold(text))




