/* eslint-disable no-console */
import chalk from "chalk";

/**
 * Symbols to use for different types of messages.
 */
const symbols = {
  info: {
    icon: chalk.cyan("ℹ"),
    color: chalk.cyan,
  },
  success: {
    icon: chalk.green("✔"),
    color: chalk.green,
  },
  warning: {
    icon: chalk.yellow("⚠"),
    color: chalk.yellow,
  },
  error: {
    icon: chalk.red("✖"),
    color: chalk.red,
  },
};

/**
 * The type of message.
 */
type MessageType = "info" | "success" | "warning" | "error";

/**
 * Formats a message with a type.
 * @param type - The message type.
 * @param message - The message to format.
 * @returns {string} The formatted message.
 */
function formatMessage(type: MessageType, message: string): string {
  return `${symbols[type].icon} ${symbols[type].color(`[${type.toUpperCase()}]`)} ${message}`;
}

/**
 * Prints an info message.
 * @param message - The message to print.
 */
export function printInfo(message: string): void {
  console.info(formatMessage("info", message));
}

/**
 * Prints a warning message.
 * @param message - The message to print.
 */
export function printWarning(message: string): void {
  console.warn(formatMessage("warning", message));
}

/**
 * Prints an error message.
 * @param message - The message to print.
 * @param error - An optional error object to print.
 */
export function printError(message: string, error?: string | Error): void {
  console.error(formatMessage("error", message));
  if (error) {
    const err = error instanceof Error ? error.stack || error.message : String(error);
    console.error(formatMessage("error", err));
  }
}

/**
 * Prints a success message.
 * @param message - The message to print.
 */
export function printSuccess(message: string): void {
  console.log(formatMessage("success", message));
}

/**
 * Prints a message.
 * @param message - The message to print.
 */
export function printMessage(message: string): void {
  console.log(message);
}

/**
 * Prints a blank line.
 */
export function printBlankLine(): void {
  console.log("");
}

/**
 * Prints each element of an array.
 * @param arr - The array to print.
 */
export function printArray(arr: string[]): void {
  arr.forEach((line) => {
    if (Array.isArray(line)) {
      printArray(line);
    } else {
      console.log(`- ${line}`);
    }
  });
}

/**
 * Prints a header message.
 * @param message - The message to print.
 */
export function printHeader(message: string): void {
  const length = 60;
  const line = chalk.cyan.bold("#".repeat(length));
  console.log(line);
  console.log(chalk.cyan.bold(` ${message}`));
  console.log(line);
}

/**
 * Prints a subheader message.
 * @param message - The message to print.
 */
export function printSubheader(message: string): void {
  const length = 50;
  const line = chalk.magenta.bold("*".repeat(length));
  console.log(line);
  console.log(chalk.magenta.bold(` ${message}`));
  console.log(line);
}

/**
 * Prints a section header message.
 * @param message - The message to print.
 */
export function printSectionHeader(message: string): void {
  const length = 40;
  const line = chalk.blue.bold("=".repeat(length));
  console.log(line);
  console.log(chalk.blue.bold(` ${message}`));
  console.log(line);
}
