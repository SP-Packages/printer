import chalk from "chalk";

/**
 * Symbols and colors for different message types.
 */
const symbols = {
  info: { icon: chalk.cyan("ℹ"), color: chalk.cyan },
  success: { icon: chalk.green("✔"), color: chalk.green },
  warning: { icon: chalk.yellow("⚠"), color: chalk.yellow },
  error: { icon: chalk.red("❌"), color: chalk.red },
};

export type MessageType = keyof typeof symbols;

/**
 * Formats a message with a type.
 * @param type - The message type.
 * @param message - The message to format.
 * @returns The formatted message.
 */
export function formatMessage(type: MessageType, message: string): string {
  return `${symbols[type].icon} ${symbols[type].color(`[${type.toUpperCase()}]`)} ${message}`;
}
