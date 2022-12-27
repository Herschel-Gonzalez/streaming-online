import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

import './assets/main.css'

let app = null

firebase.auth().onAuthStateChanged(()=>{
    if (!app) {
       app = createApp(App);
       app.use(router)

       app.mount('#app')
    }
})

