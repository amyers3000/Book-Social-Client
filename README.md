# The Book Club - Client

A social media application that brings book lovers together. The goal of this applicaiton is to not only connect people online but in person as well. The site features:

- An authentication and authorization feature that allows users to create accounts and sign in

- A search functionality that utilizes the Google Books API 

- A favorites list that allows users to show off to friends there top reads

- A comment section that allows users to connect with one another to discuss books

- Ability to follow and unfollow users

## Future Updates and Additions
Some features that will be implemented in the future:

- Admin privliges provided to some users

- A list of book club events near the users location 

- A map displaying local coffee shops and libraries for users to meet up at

- More tweaking with CSS and picking out better colors 

- Improve error handling

- Find ways to make code more dry

## Tools and Technologies

React | Context | Reac-Router-Dom | Swiper | React-Scroll 

## Instructions

Run npm start to run applicaiton

User is brought to sign in page by default. User can either sign in or make an account.

Upon sign in, user will be redirected to the home page. Here the user can search books by either title or title and author. Results will be displayed in gallery.

User can select a book card to get more details or add book to favorites.

User has option to go to profile and view favorites. When viewing other profiles, this is the same display:

- Favorite book can be clicked on and new section will be mounted below profile that gives the book details and discussion board( button displays that can navigate user to section ).
- Discussion board allows user to communicate with others. Comments/Posts can be edited and deleted.
- Option to remove book from favorites is also displayed
- If viewing another users profile, button will display that allows user to add friend/connect

Navbar has a friends feature in the right hand corner:
- This side bar allows user to search for others
- Displays all "Book Buds" user has



## Getting Started with Create React App

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
