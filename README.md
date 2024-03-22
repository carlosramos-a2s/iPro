# Frontend (React)

Prerequisites
--------
1. Install [NodeJS](https://nodejs.org/en/download)
2. Run `npm install -g create-react-app` to install React
3. Run `npm install -g react-scripts` to install `react-scripts`
4. Run `npm install` to install the dependencies

Commands
--------
- `npm start` - Start the development server
- `npm run build` - Create a production build

Deployment Steps
--------
1. Open the `.env` file and update the values for the API endpoint and API key. Save the file.
2. Run `npm run build` to create the build artifacts. This will create a folder called `build`.
3. Upload the contents of the `build` folder into the website S3 bucket.

