# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Part 5: README
In the Github Repository for this assignment, please include the following in a README file in the root directory of your repository:
Describe the goal of the application and value to a user
Link to your deployed web application running online
Explain the organization of your Components, and the props and state related to them
Note the usability principles considered for layout and hierarchy


1) Describe the goal of the application and value to a user.

The SweetHaus Bakes application serves to provide users a way to be infoemed of the business's goods and products. Users will have a easier time navigating the application using the filters and sorts provided by the application.

2) Link to the deployed web application running online 

3) The components are organized into indepedent sections of code: Cart Component, Filter Component, Header Component, Home Component, Single Product Component. Context.js is used as the foundation for all the context that the component functions and reducer.js will get. Reducer.js helps update complicated states of the components in the application. I made sure that 
each important piece of the application will be put into its own component for readability and code-usability purposes. Thus, the props and state of the cart work together to displaying the items that are added to the cart and removing items from the cart page, counting + summing up the total amount in price/quanity count of the items. The props and the state in the filters component all cooperate to create the filter function of sorting prices, clearing the filters/sorting, and sorting the items visually based on price. The props and state in the header component all work together to create whatever is in the navbar, the filtering for the search bar, the visual aspect of the interactive cart button, and the title. For the home component, the props and the states ensures the filtering/sorting functionalities is connected to the products that is displayed in the home page. Next, the props and the state for the singleProduct component work together to ensure that everything that is inside one card component works (i.e displaying the price/name/if the item is gluten free or not & the adding and removing items functionality). These components and the files in the context folder all work together to create the current application that you are seeing now.

4) The application ensures that the layout and the hierachy is clear. The text are in different sizes for the user to guess the importance of each component and for memorability purposes. Also, the layout is organized in a way where it's easy to nvaigate the page through how the components for each section goes with one another (i.e the components in the filtering function are all in the filtering products section) and the props for each item is layout neatly (number one: name, number two: price, etc). I make sure that the usuability principles are applied to an effective extent where the user is able to use the application without being confused by any of the functionalities of the application.


Some of the logic from the project, I learned from CodeAcademy and RouteCoder Youtube Videos.