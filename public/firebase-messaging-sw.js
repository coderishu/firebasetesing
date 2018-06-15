importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyAQfFA0dV7tI_fIpnj7dZYhzef4Ci2gDX0",
    authDomain: "tidy-computing-130701.firebaseapp.com",
    databaseURL: "https://tidy-computing-130701.firebaseio.com",
    projectId: "tidy-computing-130701",
    storageBucket: "tidy-computing-130701.appspot.com",
    messagingSenderId: "757906834161"
  };
  firebase.initializeApp(config);
  firebase.initializeApp({
    'messagingSenderId': '757906834161'
  });