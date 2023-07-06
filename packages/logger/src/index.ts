/* eslint-disable no-console */
import chalk from "chalk";

const Log = console.log;
const LogInfo = (...msg: any[]) => Log(chalk.blue(msg));
const LogError = (...msg: any[]) => Log(chalk.red(msg));
const LogWarning = (...msg: any[]) => Log(chalk.yellow(msg));

export { Log, LogInfo, LogError, LogWarning };
