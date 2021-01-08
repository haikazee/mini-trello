import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
// import "antd/dist/antd.css";
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from 'styled-components';
import firebase from 'firebase/app';
import { Provider } from 'react-redux';
import store from './store';

firebase.initializeApp({
  apiKey: "AIzaSyBWipUfR72p8cNG032l0hA_vbcKZO6fUfk",
  authDomain: "firestore-tutorial-fireship.firebaseapp.com",
  projectId: "firestore-tutorial-fireship",
  storageBucket: "firestore-tutorial-fireship.appspot.com",
  messagingSenderId: "1051127971899",
  appId: "1:1051127971899:web:6fd908f19cdf1e7ff1dc1e"
}
);

const theme = {
 brown:  '#CA9584',
 darkBrown:  '#B87A66',
 black:  '#1D1D1D',
 lightBlack: 'rgba(29, 29, 29, 0.32)',
 white:  '#EDEDED',
 primary: '#FFFFFF',
 grey:  '#E5E5E5',
 darkGrey:  '#787878',
 green:  '#3E9714',
 lightGreen:  '#D9FBC9',
 red:  '#DD4040',
 blue:  '#0089D7',
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
