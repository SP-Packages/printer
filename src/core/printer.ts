/* eslint-disable no-console */
import chalk from "chalk";
import { formatMessage } from "./formatter.js";

export class Printer {
  private static verbose = false;

  static enableVerbose() {
    this.verbose = true;
  }

  static disableVerbose() {
    this.verbose = false;
  }

  private static shouldPrint(ignoreVerbose?: boolean): boolean {
    return ignoreVerbose || this.verbose;
  }

  static message(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      console.log(message);
    }
  }

  static blankLine(ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      console.log("");
    }
  }

  static array<T>(array: T[], ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      array.forEach((line) => console.log(`- ${line}`));
    }
  }

  static header(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      const length = 60;
      const line = chalk.cyan.bold("#".repeat(length));
      console.log(line);
      console.log(chalk.cyan.bold(` ${message}`));
      console.log(line);
    }
  }

  static subheader(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      const length = 50;
      const line = chalk.magenta.bold("*".repeat(length));
      console.log(line);
      console.log(chalk.magenta.bold(` ${message}`));
      console.log(line);
    }
  }

  static sectionHeader(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      const length = 40;
      const line = chalk.blue.bold("=".repeat(length));
      console.log(line);
      console.log(chalk.blue.bold(` ${message}`));
      console.log(line);
    }
  }

  static info(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      console.info(formatMessage("info", message));
    }
  }

  static success(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      console.log(formatMessage("success", message));
    }
  }

  static warning(message: string, ignoreVerbose = false) {
    if (this.shouldPrint(ignoreVerbose)) {
      console.warn(formatMessage("warning", message));
    }
  }

  static error(message: string, errorOrIgnoreVerbose?: unknown, ignoreVerbose?: boolean) {
    let error: unknown;
    let forceDisplay = ignoreVerbose ?? false;

    if (typeof errorOrIgnoreVerbose === "boolean") {
      forceDisplay = errorOrIgnoreVerbose;
    } else {
      error = errorOrIgnoreVerbose;
    }

    if (this.shouldPrint(forceDisplay)) {
      console.error(formatMessage("error", message));
      if (error) {
        const errMsg = error instanceof Error ? error.stack || error.message : String(error);
        console.error(formatMessage("error", errMsg));
      }
    }
  }
}
