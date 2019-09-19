import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import ReactGA from 'react-ga'
import Context from './Context'

// import './global.css';
import {App} from './App';

firebase.initializeApp({
  apiKey: "AIzaSyC-IlrQmpFkFW7W9nkenEF8os3zwm7Q6vM",
  authDomain: "pagina-oribttas.firebaseapp.com",
  databaseURL: "https://pagina-oribttas.firebaseio.com",
  projectId: "pagina-oribttas",
  storageBucket: "pagina-oribttas.appspot.com",
  messagingSenderId: "577051000090",
  appId: "1:577051000090:web:d3bcb5d643424838"
})
ReactGA.initialize('UA-145708307-1');

process.env.URL = 'https://orbittasteam-ssr.jesusrojasweb.now.sh'

ReactGA.pageview(window.location.pathname + window.location.search)

const container = document.getElementById('app');

ReactDOM.render(
  <Context.Provider>
    <App/>
  </Context.Provider>
  ,container)
