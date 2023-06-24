# Nasa-Apod-Api

**Project Name**: NASA APOD <br>
**Description**: This project fetches the Astronomy Picture of the Day (APOD) from the NASA API and displays it on a web page. <br> 
**Author**: Akhil <br>
**License**: ISC <br>
**Dependencies**:
- Axios
- Body-parser
- EJS
- Express
- Path

# API Documentation
The project exposes the following API endpoints:

- **/apod**: Fetches the APOD for the current day.
- **/apod?date=YYYY-MM-DD**: Fetches the APOD for the specified date.

### Example Requests

The following are examples of requests that can be made to the project API:

- **GET /apod**: Fetches the APOD for the current day.
- **GET /apod?date=2023-03-08**: Fetches the APOD for March 8, 2023.

### Responses

The project API returns JSON objects with the following properties:

- **title**: The title of the APOD.
- **explanation**: The explanation of the APOD.
- **url**: The URL of the APOD image.
- **apiLimit**: The remaining API limit.
- Error Handling

If an error occurs, the project API will return a JSON object with the following properties:

- error: The error message.

## Installation

1. Clone the repository from GitHub:
```
git clone https://github.com/akhilathuluri/Nasa-Apod-Api.git
```
2. Install the dependencies:
```
npm install
```
##Running the project
1. Start the server:
```
node server.js
```
2. Open a web browser and navigate to http://localhost:3000 .

## Project Structure
```
nasa_apod
├── index.ejs
├── Nasa-Apod.ejs
├── Nasa-Apod-Date.ejs
├── package.json
├── server.js
└── styles
    └── Nasa-Apod.css
```
**index.ejs**: This is the home page of the project. It displays a welcome message and a link to the APOD page.

**Nasa-Apod.ejs**: This is the page that displays the APOD. It fetches the APOD data from the NASA API and displays the image, title, explanation, and API limit.

**Nasa-Apod-Date.ejs**: This is the page that allows users to search for APOD data for a specific date. It fetches the APOD data for the specified date and displays the image, title, explanation, and API limit.

**server.js**: This is the main file of the project. It sets up the Express server and defines the routes for the different pages.

**styles/Nasa-Apod.css**: This file contains the CSS styles for the APOD page.

**package.json**: This file contains the project dependencies and the scripts for running the project.



# Contributing

Contributions are welcome! Please open a pull request on GitHub if you have any changes or improvements to the project.

# License

The project is licensed under the ISC license.

I hope this documentation is helpful. Please let me know if you have any questions.
