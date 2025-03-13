/* eslint-disable no-console */
import chalk from "chalk";
import { formatMessage } from "./formatter.js";

export class Printer {
  private static verbose = false;
  private static quiet = false;

  /**
   * Enable verbose mode.
   */
  static enableVerbose() {
    this.verbose = true;
    this.quiet = false;
  }

  /**
   * Disable verbose mode.
   */
  static disableVerbose() {
    this.verbose = false;
  }

  /**
   * Enable quiet mode.
   */
  static enableQuiet() {
    this.quiet = true;
    this.verbose = false;
  }

  /**
   * Disable quiet mode.
   */
  static disableQuiet() {
    this.quiet = false;
  }

  /**
   * Check if the printer is in verbose mode.
   * @returns True if in verbose mode, false otherwise.
   */
  private static shouldPrint(): boolean {
    return !this.quiet; // Print unless in quiet mode
  }

  /**
   * Log a message.
   * @param message - The message to log.
   * @param type - The type of message
   */
  static log(
    message: unknown,
    type: "error" | "array" | "text" | "header" | "subheader" | "section" = "text",
  ) {
    if (this.verbose && this.shouldPrint()) {
      switch (type) {
        case "array":
          if (Array.isArray(message)) {
            this.array(message);
          } else {
            console.warn("Expected an array for type 'array'");
          }
          break;
        case "error":
          if (message instanceof Error) {
            this.error(message.message, message);
          } else {
            this.error(String(message));
          }
          break;
        case "header":
          this.header(String(message));
          break;
        case "subheader":
          this.subheader(String(message));
          break;
        case "section":
          this.sectionHeader(String(message));
          break;
        default:
          console.log(message);
      }
    }
  }

  /**
   * Log a message.
   * @param message - The message to log.
   */
  static message(message: string) {
    if (this.shouldPrint()) {
      console.log(message);
    }
  }

  /**
   * Log a blank line.
   */
  static blankLine() {
    if (this.shouldPrint()) {
      console.log("");
    }
  }

  /**
   * Log an array of messages.
   * @param array - The array of messages to log.
   */
  static array<T>(array: T[]) {
    if (this.shouldPrint()) {
      array.forEach((line) => console.log(`- ${line}`));
    }
  }

  /**
   * Log a header.
   * @param message - The message to log.
   */
  static header(message: string) {
    if (this.shouldPrint()) {
      const length = 60;
      const line = chalk.cyan.bold("#".repeat(length));
      console.log(line);
      console.log(chalk.cyan.bold(` ${message}`));
      console.log(line);
    }
  }

  /**
   * Log a subheader.
   * @param message - The message to log.
   */
  static subheader(message: string) {
    if (this.shouldPrint()) {
      const length = 50;
      const line = chalk.magenta.bold("*".repeat(length));
      console.log(line);
      console.log(chalk.magenta.bold(` ${message}`));
      console.log(line);
    }
  }

  /**
   * Log a section header.
   * @param message - The message to log.
   */
  static sectionHeader(message: string) {
    if (this.shouldPrint()) {
      const length = 40;
      const line = chalk.blue.bold("=".repeat(length));
      console.log(line);
      console.log(chalk.blue.bold(` ${message}`));
      console.log(line);
    }
  }

  /**
   * Log a message as info.
   * @param message - The message to log.
   */
  static info(message: string) {
    if (this.shouldPrint()) {
      console.info(formatMessage("info", message));
    }
  }

  /**
   * Log a message as success.
   * @param message - The message to log
   */
  static success(message: string) {
    if (this.shouldPrint()) {
      console.log(formatMessage("success", message));
    }
  }

  /**
   * Log a message as warning.
   * @param message - The message to log.
   */
  static warning(message: string) {
    if (this.shouldPrint()) {
      console.warn(formatMessage("warning", message));
    }
  }

  /**
   * Log an error message.
   * @param message - The error message to log.
   * @param error - The error object.
   */
  static error(message: string, error?: unknown) {
    if (this.shouldPrint()) {
      console.error(formatMessage("error", message));
      if (error) {
        const errMsg = error instanceof Error ? error.stack || error.message : String(error);
        console.error(formatMessage("error", errMsg));
      }
    }
  }
}
