<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <form action="#"  @submit.prevent="login">
      <input type="mail" placeholder="Correo" v-model="correo">
      <input type="password" placeholder="Contraseña" v-model="password">
      <button type="submit">Iniciar Sesión</button>
    </form>
    
    <div v-if="error">
        {{ error }}
      </div>
    
  </main>
</template>
<script>

import { auth, firebase } from "../firebase";
export default{
  data() {
    return {
      correo:'',
      password:'',
      error:''
    }
  },
  name:'LoginView',
  methods: {
    login(){
      console.log(this.nombre);
      if (this.correo && this.password) {
        //enviamos el formulario
        firebase.auth().signInWithEmailAndPassword(this.correo, this.password)
        .then(user =>{
          this.$router.push({name:'dashboard'});
        }).catch(err =>{
          this.error = err.message;
        })
      }else{
        this.error = "Todos los campos son requeridos";
      }
    }
  }
}


</script>
