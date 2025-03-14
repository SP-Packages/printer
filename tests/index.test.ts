import { describe, it, expect } from "vitest";
import { Printer } from "../src/core/printer.js";

describe("Index Export", () => {
  it("should export Printer class", () => {
    expect(Printer).toBeDefined();
  });
});
