import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { initializeApp } from 'firebase/app';

//import { getAuth } from 'firebase/auth';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyCATKfTENZDI-7hvsP5hT5M1rOcWAX1eXk",
  authDomain: "streaming-online-8d51d.firebaseapp.com",
  projectId: "streaming-online-8d51d",
  storageBucket: "streaming-online-8d51d.appspot.com",
  messagingSenderId: "14790765745",
  appId: "1:14790765745:web:9a54a9b51c41a0dd0e8690"
});

//const auth = getAuth(firebaseApp);

const app = createApp(App)


app.use(router)

app.mount('#app')
