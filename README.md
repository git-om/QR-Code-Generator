# QR Code Generator

This Node.js application generates a QR code image based on a user-provided link.

## Prerequisites

Before running this application, ensure that you have the following dependencies installed:

- Node.js
- inquirer
- qr-image
- fs

You can install the dependencies by running the following command:

```
npm install inquirer qr-image fs
```

## Usage

1. Clone this repository or download the source code files.

2. Open a terminal and navigate to the project directory.

3. Run the following command to start the application:

```
node index.js
```

4. You will be prompted to enter a link. Provide the desired URL and press Enter.

5. The application will generate a QR code image based on the provided link and save it to a file named "code.png" in the current directory.

## Troubleshooting

If you encounter any issues while running the application, consider the following:

- Ensure that you have the necessary dependencies installed as mentioned in the Prerequisites section.

- Verify that you have write permissions to the current directory in order to save the QR code image.

- Check the terminal for any error messages that may provide information about the issue.

## Acknowledgments

- The [inquirer](https://www.npmjs.com/package/inquirer) library for creating prompts in the command line.
- The [qr-image](https://www.npmjs.com/package/qr-image) library for generating QR code images.
- The [Node.js fs module](https://nodejs.org/api/fs.html) for file system operations.
