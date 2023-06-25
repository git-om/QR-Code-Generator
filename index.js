import inquirer from 'inquirer'; // Import the inquirer library
import qr from 'qr-image'; // Import the qr-image library
import fs from 'fs'; // Import the fs module

const questions = [{
    type: 'input',
    name: 'link',
    message: "Enter the link : "
}];

inquirer
  .prompt(questions)
  .then((answers) => {
    const URL = answers.link; // Get the user's input from the answers object
    const qr_png = qr.image(URL); // Generate a QR code image based on the URL
    qr_png.pipe(fs.createWriteStream('code.png')); // Save the QR code image to a file named 'code.png'
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment"); // Log an error message if the prompt couldn't be rendered
    } else {
      console.error('Something else went wrong:', error); // Log an error message if something else went wrong
    }
  });
