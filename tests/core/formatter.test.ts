import { describe, it, expect } from "vitest";
import { formatMessage } from "../../src/core/formatter";

describe("formatMessage", () => {
  it("should format info messages correctly", () => {
    const message = formatMessage("info", "This is an info message");
    expect(message).toContain("ℹ"); // Checks for the info icon
    expect(message).toContain("[INFO]");
    expect(message).toContain("This is an info message");
  });

  it("should format success messages correctly", () => {
    const message = formatMessage("success", "Operation successful");
    expect(message).toContain("✔"); // Success icon
    expect(message).toContain("[SUCCESS]");
    expect(message).toContain("Operation successful");
  });

  it("should format warning messages correctly", () => {
    const message = formatMessage("warning", "This is a warning");
    expect(message).toContain("⚠");
    expect(message).toContain("[WARNING]");
    expect(message).toContain("This is a warning");
  });

  it("should format error messages correctly", () => {
    const message = formatMessage("error", "Something went wrong");
    expect(message).toContain("❌");
    expect(message).toContain("[ERROR]");
    expect(message).toContain("Something went wrong");
  });
});
