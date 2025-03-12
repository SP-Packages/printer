# **Printer**

_A lightweight CLI tool and Node.js module for formatted console output._

![npm](https://img.shields.io/npm/v/@sp-packages/printer)
![npm](https://img.shields.io/npm/dw/@sp-packages/printer)
![License](https://img.shields.io/npm/l/@sp-packages/printer)
![Build](https://github.com/SP-Packages/printer/actions/workflows/release.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/Made%20with-TypeScript-blue.svg)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

## **✨ Features**

- 🎨 **Rich formatting** for messages (success, error, warning, info, headers)
- 🔄 **Verbose mode** for detailed logging
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

Enable verbose logging:

```ts
Printer.enableVerbose();
Printer.info("This will always display when verbose is enabled.");
```

Disable verbose mode:

```ts
Printer.disableVerbose();
```

#### **Benefits of Verbose Mode in npm Modules:**

- **Enhanced Debugging:** Verbose mode provides more context and detailed logs, making it easier to pinpoint where things might be going wrong in your code.
- **Better Traceability:** With more information being logged, you can trace the execution path and understand the sequence of operations.
- **Improved Development Experience:** Developers can get insights into the internal workings of the module, which can be particularly useful during development and testing phases.
- **Efficient Troubleshooting:** Detailed logs can help in quickly identifying and resolving issues, reducing the time spent on debugging.
- **Single Control Point:** Verbose mode can be enabled or disabled with a single flag, providing a centralized way to control the verbosity of logs.

Verbose mode is particularly useful in CI/CD pipelines, automation scripts, and during the development of complex Node.js applications where understanding the flow of execution

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
