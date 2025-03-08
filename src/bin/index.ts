#!/usr/bin/env node
import { printSuccess, printError, printWarning, printMessage, printInfo } from "../index.js";

const ARG_OFFSET = 2;
const args = process.argv.slice(ARG_OFFSET);
const [command, ...message] = args;
const messageText = message.join(" ");

/**
 * Prints a message based on the command.
 * @param command - The command to execute
 * @param messageText - The message to print
 */
switch (command) {
  case "success":
    printSuccess(messageText);
    break;
  case "error":
    printError(messageText);
    break;
  case "warning":
    printWarning(messageText);
    break;
  case "info":
    printInfo(messageText);
    break;
  default:
    printMessage("Usage: printer <success|error|warning|info> <message>");
}
