##Hashtag Generator

##Background and Overview
This application utilizes the Amazon Rekognition Image API to analyze user-uploaded images and produce possible keywords that could be used as a hashtag for this image on social networking sites, like instagram or twitter. Later, I hope to use this functionality in conjunction with analysis of trending hashtags related to the produced keywords to offer users top trending hashtags for their photos.

##Functionality and MVP Features
[ ] Photo Uploading to S3
[ ] Keyword generation using Amazon Rekognition Image API

###Bonus
[ ] Search of trending hashtags related to keyword(s)

##Architecture and Technologies
###Amazon S3
  - Used to store user-uploaded images
###Amazong Rekognition Image API
  - A deep learning powered image recognition service that detects objects, scenes, and faces.
  - Used to analyze images and produce keywords associated with the image
###Instagram Search API
  - May be used later to find other hashtags that are related to the keyword(s) associated with uploaded image

##Implementation Timeline
####Day 1 (Thursday):
[ ] Set up S3 bucket
[ ] Set up image uploading to S3

####Day 2 (Friday):
[ ] Test Amazon Rekognition Image API with uploaded photo

####Days 3/4 (Weekend):
[ ] Test Amazon Rekognition Image API
[ ] Build user interface for uploading images

####Day 5 (Monday):
[ ] Build user interface for seeing keyword results
[ ] Brainstorm how to find related trending hashtags

####Day 6 (Tuesday):
[ ] Start working on bonus - suggesting related trending hashtags based on instagram hashtag analysis

<!-- 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->
