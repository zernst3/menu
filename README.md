# My React and TypeScript boilerplate

This is a React web app template that uses TypeScript to create a foundation in which to add other pages. A Material UI navbar is included by default, as well as a home page to get started.

### Default Navbar

By default, the navbar includes a button for the home screen. In order to add pages and routes, add the appropriate objects to the "menuItems" object within "Navbar.tsx." This is automatically responsive and will turn into a clickable button on mobile screens that opens another popup navbar. If no icon is added in the object for your nav link, you will need to set the "listIcon" variable to null.

### Routes

By convention, the routes use the BrowserRouter as defined in react-router-dom. Included by default is a 404 page, which simply displays the error message.

### Components

The boilerplate includes three Components by default: Home, Navbar and NotFound. By my personal convention, each component is held in its own folder which includes the component .tsx file as well as its corresponding .css file. Also by convention, the components are exported from an index file located in the "Components" folder.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
