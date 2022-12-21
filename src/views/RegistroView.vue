<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <form action="#" @submit.prevent="register">
      <input type="text" placeholder="Nombre" v-model="nombre">
      <input type="text" placeholder="Apellido Paterno" v-model="paterno">
      <input type="text" placeholder="Apellido Materno" v-model="materno">
      <input type="number" placeholder="Edad" v-model="edad">
      <input type="date" placeholder="Fecha de nacimiento" v-model="fecha">
      Sexo<select name="sexo" id="sexo" v-model="sexo">
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
      </select>
      Genero favorito<select name="genero" id="genero" v-model="genero">
          <option value="Terror">Terror</option>
          <option value="Comedia">Comedia</option>
          <option value="Ficcion">Ficcion</option>
          <option value="Aventura">Aventura</option>
          <option value="Accion">Accion</option>
      </select>
      <input type="email" placeholder="Correo" id="correo" v-model="correo">
      <input type="password" placeholder="Contraseña" id="password" v-model="password">
      <button type="submit">Registrar</button>

      

      <div v-if="error">
        {{ error }}
      </div>
      
    </form>
    
  </main>
</template>
<script>
export default{
  data() {
    return {
      nombre:'',
      paterno:'',
      materno:'',
      edad:'',
      fecha:'',
      sexo:'',
      genero:'',
      correo:'',
      password:'',
      error:''
    }
  },
  name:'Register',
  methods: {
    register(){
      console.log(this.nombre);
      if (this.nombre && this.paterno && this.materno && this.edad && this.fecha && this.sexo && this.genero && this.correo && this.password) {
        //enviamos el formulario
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
          this.nombre = '';
          this.paterno = '';
          this.materno = '';
          this.edad = '';
          this.fecha = '';
          this.sexo = '';
          this.genero = '';
          this.correo = '';
          this.password = '';
          console.log(user);
        }).catch(err => {
          this.error = err.message;
        });
      }else{
        this.error = "Todos los campos son requeridos";
      }
    }
  }
}

</script>
