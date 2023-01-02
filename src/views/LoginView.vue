<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <form action="#"  @submit.prevent="login">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Correo</label><br>
        <input type="mail" placeholder="Correo" class="form-control" v-model="correo"><br>
        <label for="exampleFormControlInput1" class="form-label">Contraseña</label><br>
        <input type="password" class="form-control" placeholder="Contraseña" v-model="password"><br>
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </div>
      
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
