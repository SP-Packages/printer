# **Printer**

<p align="center"><i>A lightweight CLI tool and Node.js module for formatted console output.</i></p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@sp-packages/printer" alt="npm version">
  <a href="https://packagephobia.com/result?p=@sp-packages/printer">
    <img src="https://packagephobia.com/badge?p=@sp-packages/printer" alt="install size">
  </a>
  <img src="https://img.shields.io/npm/dw/@sp-packages/printer" alt="npm downloads">
  <img src="https://img.shields.io/npm/l/@sp-packages/printer" alt="license">
  <img src="https://github.com/SP-Packages/printer/actions/workflows/release.yml/badge.svg" alt="build status">
  <a href="https://github.com/semantic-release/semantic-release">
    <img src="https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release" alt="semantic-release">
  </a>
  <img src="https://img.shields.io/badge/Made%20with-TypeScript-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="Prettier">
  <a href="https://codecov.io/gh/SP-Packages/printer">
    <img src="https://codecov.io/gh/SP-Packages/printer/graph/badge.svg?token=60X95UNTQL" alt="codecov">
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome">
   <a href="https://github.com/sponsors/iamsenthilprabu">
    <img src="https://img.shields.io/badge/Sponsor-%E2%9D%A4-pink?logo=github" alt="Sponsor">
  </a>
</p>

## **✨ Features**

- 🎨 **Rich formatting** for messages (success, error, warning, info, headers)
- 🔄 **Verbose mode** for detailed logging
- 🔇 **Quiet mode** to suppress non-essential output
- 🚀 **Usable via CLI or programmatically in Node.js**
- 📜 **Structured output** for better readability
- 🛠 **Ideal for CI/CD, automation scripts, and development tools**

---

## **📦 Installation**

### **Global Installation** (For system-wide CLI use)

```sh
npm install -g @sp-packages/printer
```

This allows you to use `printer` globally in your terminal.

### **Local Installation** (For project-specific use)

```sh
npm install @sp-packages/printer --save-dev
```

Then, run it via:

```sh
npx printer success "Setup completed!"
```

---

## **🚀 CLI Usage**

### **Basic Usage**

```sh
printer <type> <message>
```

#### **Message Types:**

- ✅ `success` - Green message for success output
- ❌ `error` - Red message for errors (supports error objects)
- ⚠ `warning` - Yellow message for warnings
- ℹ `info` - Blue message for general information
- 📝 `message` - Plain text message (no formatting)

#### **Examples:**

```sh
printer success "Operation completed successfully!"
printer error "Something went wrong"
printer warning "This is a warning message"
printer info "Starting process..."
printer message "Simple message without formatting"
```

---

## **📜 Programmatic Usage (Inside Node.js)**

You can also use `printer` inside your JavaScript/TypeScript projects.

### **Import and Use in Your Project**

```ts
import { Printer } from "@sp-packages/printer";

Printer.success("Setup completed successfully!");
Printer.error("An error occurred", new Error("Database connection failed"));
Printer.warning("This is a warning message");
Printer.info("Fetching data...");
Printer.message("Regular message");
```

### **Verbose Mode**

Verbose mode provides detailed logging, which can be extremely helpful for debugging and development purposes. When enabled, it outputs additional information that can help you trace the execution flow and identify issues more easily.

#### **Enable Verbose Mode:**

```ts
Printer.enableVerbose();
Printer.log("This will display only in verbose mode.");
```

#### **Disable Verbose Mode:**

```ts
Printer.disableVerbose();
```

#### **Example (Verbose Mode ON):**

```ts
Printer.enableVerbose();
Printer.success("Process completed");
Printer.log("Detailed execution log...");
```

**Output:**

```sh
✅ [SUCCESS] Process completed
Detailed execution log...
```

#### **Example (Verbose Mode OFF):**

```ts
Printer.disableVerbose();
Printer.success("Process completed");
Printer.log("Detailed execution log...");
```

**Output:**

```sh
✅ [SUCCESS] Process completed
```

#### **Benefits of Verbose Mode in npm Modules:**

- **Enhanced Debugging:** Verbose mode provides more context and detailed logs, making it easier to pinpoint where things might be going wrong in your code.
- **Better Traceability:** With more information being logged, you can trace the execution path and understand the sequence of operations.
- **Improved Development Experience:** Developers can get insights into the internal workings of the module, which can be particularly useful during development and testing phases.
- **Efficient Troubleshooting:** Detailed logs can help in quickly identifying and resolving issues, reducing the time spent on debugging.
- **Single Control Point:** Verbose mode can be enabled or disabled with a single flag, providing a centralized way to control the verbosity of logs.

Verbose mode is particularly useful in CI/CD pipelines, automation scripts, and during the development of complex Node.js applications where understanding the flow of execution is crucial.

### **Quiet Mode**

Quiet mode suppresses **all output**, including errors. This can be useful when you need to ensure that no messages clutter the console output in production or automated environments.

#### **Enable Quiet Mode:**

```ts
Printer.enableQuiet();
```

#### **Disable Quiet Mode:**

```ts
Printer.disableQuiet();
```

#### **Example (Quiet Mode ON):**

```ts
Printer.enableQuiet();
Printer.success("Process completed");
Printer.warning("This warning will NOT be displayed");
Printer.error("Critical error!");
```

**Output:**

```sh

```

> **Note:** When quiet mode is enabled, no messages will be printed, including errors.

#### **Example (Quiet Mode OFF):**

```ts
Printer.disableQuiet();
Printer.success("Process completed");
Printer.warning("This warning WILL be displayed");
```

**Output:**

```sh
✅ [SUCCESS] Process completed
⚠ [WARNING] This warning WILL be displayed
```

---

## **🎯 Example Outputs**

```sh
✅ [SUCCESS] Operation completed successfully!
❌ [ERROR] An error occurred: Database connection failed
⚠ [WARNING] Be cautious! Proceeding with default values.
ℹ [INFO] Fetching data...
📝 [MESSAGE] Process initiated.
```

---

## **💡 Use Cases**

- **CI/CD Pipelines** – Enhance logs in automation scripts
- **Node.js CLI Tools** – Format console outputs for better readability
- **Development Debugging** – Enable verbose mode for debugging
- **Project Setup Scripts** – Display status messages during installations

---

## **🤝 Contributing**

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

---

## **📜 License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
