# Title #

The simplest MEAN application possible, that works end to end.


### Prerequisites

Install Node JS from https://nodejs.org/
Install Mongo DB. If you are using a Mac you can use instructions at https://treehouse.github.io/installation-guides/mac/mongo-mac.html (I recommend using homebrew) 

### Installing

Run the following commands

npm install

bower install

## Starting the application

Run the following commands

grunt

npm start

## Using the application

Visit http://localhost:3000

Clicking Create button will create a entry in the database with test values.

Clicking Read will read the created entry from the datbase.

Clicking Update will update the created entry in the database.

Clicking Delete will delete the created entry from the database.

## Folder Structure

'bower_components' and 'node_modules' are automatically created during install.

'app' folder contains the server side Node JS and Express code, TestController and TestModel

'public' folder contains the client side code - JS, CSS, images, fonts and html

## Important files

Gruntfile.js - Runs grunt tasks that do CSS and JS minification, JS Lint etc.

package.json - Lists out the required node modules for the app. 

aap.js - The initialization file for our server side code.

public/app.js - The initialization file for client side Angular code.

## Authors

Amit Behere - https://github.com/amitbehere/

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


