
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 
## Run the app
```
git clone https://github.com/dariospadoni/weather-forecast-demo.git
cd weather-forecast-demo
npm install
npm start
```
Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
The page will reload if you make edits.<br />

You will also see any lint errors in the console.

## Run tests

In the project directory, you can run:

### `npm test`
 

Launches the test runner in the interactive watch mode.<br />


## Some notes about the project

 
* I used a public proxy from Heroku to fetch the static data and avoid CORS issue

* The design on Figma covers only large screens; I adapted it for medium and small displays

* I only used the sun icon though some forecasts needed a different one; `WeatherIcons.js` makes easy to add svg icons and map them to the forecast

  
   