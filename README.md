# Meal Planner: An Example React App
This is a web app that I wrote as an example react app.

### Find recipes for your diet within your budget

This web tool loads a json file of recipes then allows a user to filter the recipes based on their diet and budget.

## How to test out  this code
 1. Clone this repository: `git clone https://github.com/drewrwilson/meal-planner`
 1. Change directory to the code `cd meal-planner`
 1. Install required packages with `npm install`
 1. Start the app with `npm start`
 1. In your browser open http://localhost:3000/

## Possible improvements

 * **Use APIs for data:** There are a few 3rd party APIs that could provide data for this little app.
 * **Various Units:** - right now this app assumes that all ingredients are measured in the same unit (grams). This is not usually the case for recipes in the US. A future improvement could be to account for different units.
 * **More filtering options:** Often people want to filter based on multiple dietary constraints, such as vegetarian and also gluten-free. Right now this is a dropdown where you can select a single diet, in the future it would be valuable to make them checkboxes where a user could select multiple.

## Tools

 * React
 * Webpack
 * Hosted on Github Pages
 * This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
