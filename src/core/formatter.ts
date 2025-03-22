import chalk from "chalk";
import stripAnsi from "strip-ansi";

/**
 * Detect the environment in which the script is running.
 * @returns The environment type: "ci", "vscode", or "terminal".
 */
export function detectEnvironment(): "ci" | "vscode" | "terminal" {
  if (process.env.CI === "true") return "ci";
  if (process.env.VSCODE_CWD) return "vscode";
  if (process.env.TERM_PROGRAM === "vscode") return "vscode";

  return "terminal";
}

const environment = detectEnvironment();

// Check if the terminal supports Unicode characters properly
const supportsUnicode =
  process.platform !== "win32" || (environment !== "ci" && environment !== "vscode");

/**
 * Symbols and colors for different message types, with fallbacks for various environments
 */
const symbols = {
  info: {
    icon: supportsUnicode ? chalk.cyan("ℹ") : chalk.cyan("i"),
    color: chalk.cyan,
  },
  success: {
    icon: supportsUnicode ? chalk.green("✅") : chalk.green("+"),
    color: chalk.green,
  },
  warning: {
    icon: supportsUnicode ? chalk.yellow("⚠") : chalk.yellow("!"),
    color: chalk.yellow,
  },
  error: {
    icon: supportsUnicode ? chalk.red("❌") : chalk.red("x"),
    color: chalk.red,
  },
};

export type MessageType = keyof typeof symbols;

/**
 * Sanitize message to handle possible ANSI escape codes or other special characters
 * that might not display properly in certain environments
 * @param message - The message to sanitize
 * @returns The sanitized message
 */
export function sanitizeMessage(message: string): string {
  if (environment === "vscode" || environment === "ci" || !supportsUnicode) {
    return stripAnsi(message);
  }
  return message;
}

/**
 * Formats a message with a type.
 * @param type - The message type.
 * @param message - The message to format.
 * @returns The formatted message.
 */
export function formatMessage(type: MessageType, message: string): string {
  const sanitizedMessage = sanitizeMessage(message);

  try {
    // Try the fancy formatting first
    return `${symbols[type].icon} ${symbols[type].color(`[${type.toUpperCase()}]`)} ${sanitizedMessage}`;
  } catch {
    // Fallback to basic formatting if anything fails
    const typeMap: Record<MessageType, string> = {
      info: "INFO",
      success: "SUCCESS",
      warning: "WARNING",
      error: "ERROR",
    };
    return `[${typeMap[type]}] ${sanitizedMessage}`;
  }
}
