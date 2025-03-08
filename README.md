# Printer

A Node.js module for handling and displaying formatted text in the console.

## Installation

To install globally:

```sh
npm install -g @sp-packages/printer
```

To install as a development dependency:

```sh
npm install --save-dev @sp-packages/printer
```

## Usage

### Command Line

Run the following command in your terminal:

```sh
printer <success|error|warning|info> <message>
```

Example:

```sh
printer success 'Successfully Completed'
```

or using npx:

```sh
npx printer success 'Successfully Completed'
```

### Importing in Your Module

You can also import and use it in your Node.js project:

```js
import {
  printSuccess,
  printError,
  printWarning,
  printMessage,
  printInfo,
} from "@sp-packages/printer";

printSuccess("Successfully Completed");
printError("Something went wrong", error);
// `error` is optional and will be displayed if passed
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
