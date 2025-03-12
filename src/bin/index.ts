#!/usr/bin/env node
import { Printer } from "../core/printer.js";

const ARG_OFFSET = 2;
const args = process.argv.slice(ARG_OFFSET);
const [command, ...message] = args;
const messageText = message.join(" ");
Printer.enableVerbose();

/**
 * Prints a message based on the command.
 * @param command - The command to execute
 * @param messageText - The message to print
 */
switch (command) {
  case "success":
    Printer.success(messageText);
    break;
  case "error":
    Printer.error(messageText);
    break;
  case "warning":
    Printer.warning(messageText);
    break;
  case "info":
    Printer.info(messageText);
    break;
  default:
    Printer.message("Usage: printer <success|error|warning|info> <message>");
}
