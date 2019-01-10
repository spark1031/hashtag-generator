import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const albumBucketName = 'hashtag-generator-app-dev';
const bucketRegion = 'us-east-2';
const IdentityPoolId = 'us-east-2:3a6a919c-6675-465d-99c7-ac9121b92e3a';

window.AWS.config.update({
  region: bucketRegion,
  // credentials: new window.AWS.CognitoIdentityCredentials({
  //   IdentityPoolId: IdentityPoolId,
  //   RoleArn: 'arn:aws:iam::047118855353:role/Cognito_hashtaggeneratorUnauth_Role',
  //   AccountId: '047118855353' // your AWS account ID
  // })
});

const s3 = new window.AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: albumBucketName }
});

// console.log(s3);


s3.listObjects({ Delimiter: '/' }, (err, data) => {
  console.log(err, data);
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
