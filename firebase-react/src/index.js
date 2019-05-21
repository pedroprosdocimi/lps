import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD2J-Y-7DKJRzItw72dYWlIOw6KpaUQJJs",
  authDomain: "projetolps-ffc5d.firebaseapp.com",
  databaseURL: "https://projetolps-ffc5d.firebaseio.com",
  projectId: "projetolps-ffc5d",
  storageBucket: "projetolps-ffc5d.appspot.com",
  messagingSenderId: "675654958408",
  appId: "1:675654958408:web:695220302e9e23c6"
};

firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
