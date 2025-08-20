/* eslint-disable no-console */
import chalk from 'chalk';
import ora, { Ora } from 'ora';
import { formatMessage, sanitizeMessage } from './formatter.js';

type PrinterMode = 'verbose' | 'minimal' | 'quiet';

export class Printer {
  private static mode: PrinterMode = 'quiet';
  private static activeSpinner: Ora | null = null;

  /**
   * Enable verbose mode.
   */
  static enableVerbose() {
    this.mode = 'verbose';
  }

  /**
   * Enable minimal mode.
   */
  static enableMinimal() {
    this.mode = 'minimal';
  }

  /**
   * Enable quiet mode.
   */
  static enableQuiet() {
    this.mode = 'quiet';
  }

  /**
   * Disable quiet mode
   */
  static disableQuiet() {
    if (this.mode === 'quiet') {
      this.mode = 'minimal';
    }
  }

  /**
   * Disable verbose mode (set to minimal by default).
   */
  static disableVerbose() {
    if (this.mode === 'verbose') {
      this.mode = 'minimal';
    }
  }

  /**
   * Check if the printer should print output.
   * @returns True if not in quiet mode.
   */
  private static shouldPrint(): boolean {
    return this.mode !== 'quiet';
  }

  /**
   * Check if the printer is in quiet mode.
   * @returns True if in quiet mode.
   */
  static get isVerbose() {
    return this.mode === 'verbose';
  }

  /**
   * Check if the printer is in quiet mode.
   * @returns True if in quiet mode.
   */
  static get isMinimal() {
    return this.mode === 'minimal';
  }

  /**
   * Clear the spinner and stop it.
   */
  private static handleSpinner() {
    if (this.activeSpinner?.isSpinning) {
      this.activeSpinner.clear().start();
    }
  }

  /**
   * Log a message.
   * @param message - The message to log.
   * @param type - The type of message
   */
  static log(
    message: unknown,
    type:
      | 'error'
      | 'success'
      | 'warning'
      | 'array'
      | 'text'
      | 'header'
      | 'subheader'
      | 'section' = 'text'
  ) {
    if (this.shouldPrint()) {
      switch (type) {
        case 'array':
          if (Array.isArray(message)) {
            this.array(message);
          } else {
            console.log("Expected an array for type 'array'");
          }
          break;
        case 'error':
          if (message instanceof Error) {
            this.error(message.message, message);
          } else {
            this.error(String(message));
          }
          break;
        case 'success':
          this.success(String(message));
          break;
        case 'warning':
          this.warning(String(message));
          break;
        case 'header':
          this.header(String(message));
          break;
        case 'subheader':
          this.subheader(String(message));
          break;
        case 'section':
          this.sectionHeader(String(message));
          break;
        default:
          this.handleSpinner();
          console.log(
            sanitizeMessage(
              typeof message === 'string' ? message : String(message)
            )
          );
      }
    }
  }

  /**
   * Display a spinner/loader.
   * @param text - The text to display with the spinner.
   * @returns The spinner instance.
   */
  static spinner(text: string): Ora {
    const spinner = ora({
      text: sanitizeMessage(text),
      color: 'blue'
    });

    if (this.shouldPrint()) {
      spinner.start();
      this.activeSpinner = spinner;
    }

    return spinner;
  }

  /**
   * Log a message.
   * @param message - The message to log.
   */
  static message(message: string) {
    if (this.shouldPrint()) {
      this.handleSpinner();
      console.log(message);
    }
  }

  /**
   * Log a blank line.
   */
  static blankLine() {
    if (this.shouldPrint()) {
      this.handleSpinner();
      console.log('');
    }
  }

  /**
   * Log an array of messages.
   * @param array - The array of messages to log.
   */
  static array<T>(array: T[]) {
    if (this.shouldPrint()) {
      this.handleSpinner();
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
      const line = chalk.cyan.bold('#'.repeat(length));
      this.handleSpinner();
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
      const line = chalk.magenta.bold('*'.repeat(length));
      this.handleSpinner();
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
      const line = chalk.blue.bold('='.repeat(length));
      this.handleSpinner();
      console.log(line);
      console.log(chalk.blue.bold(` ${message}`));
      console.log(line);
    }
  }

  /**
   * Log a simple header.
   * @param message - The message to log.
   */
  static plainHeader(message: string) {
    if (this.shouldPrint()) {
      const length = 40;
      const line = chalk.cyan.bold('-'.repeat(length));
      this.handleSpinner();
      console.log(line);
      console.log(chalk.cyan.bold(` ${message}`));
      console.log(line);
    }
  }

  /**
   * Log a simple subheader.
   * @param message - The message to log.
   */
  static plainSubheader(message: string) {
    if (this.shouldPrint()) {
      const length = 30;
      const line = chalk.magenta.bold('-'.repeat(length));
      this.handleSpinner();
      console.log(line);
      console.log(chalk.magenta.bold(` ${message}`));
      console.log(line);
    }
  }

  /**
   * Log a simple section header.
   * @param message - The message to log.
   */
  static plainSectionHeader(message: string) {
    if (this.shouldPrint()) {
      const length = 20;
      const line = chalk.blue.bold('-'.repeat(length));
      this.handleSpinner();
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
      this.handleSpinner();
      console.info(formatMessage('info', message));
    }
  }

  /**
   * Log a message as success.
   * @param message - The message to log
   */
  static success(message: string) {
    if (this.shouldPrint()) {
      this.handleSpinner();
      console.log(formatMessage('success', message));
    }
  }

  /**
   * Log a message as warning.
   * @param message - The message to log.
   */
  static warning(message: string) {
    if (this.shouldPrint()) {
      this.handleSpinner();
      console.log(formatMessage('warning', message));
    }
  }

  /**
   * Log an error message.
   * @param message - The error message to log.
   * @param error - The error object.
   */
  static error(message: string, error?: unknown) {
    if (this.shouldPrint()) {
      this.handleSpinner();
      console.log(formatMessage('error', message));
      if (error) {
        const errMsg =
          error instanceof Error ? error.stack || error.message : String(error);
        console.log(formatMessage('error', errMsg));
      }
    }
  }
}
