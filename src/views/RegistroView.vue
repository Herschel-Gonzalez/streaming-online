<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <form action="#" @submit.prevent="register">
      <input type="text" class="form-control" placeholder="Nombre" v-model="nombre"><br>
      <input type="text" class="form-control" placeholder="Apellido Paterno" v-model="paterno"><br>
      <input type="text" class="form-control" placeholder="Apellido Materno" v-model="materno"><br>
      <input type="number" class="form-control" placeholder="Edad" v-model="edad"><br>
      <label for="date" class="form-label">Fecha de nacimiento</label><br>
      <input type="date" placeholder="Fecha de nacimiento" v-model="fecha"><br>
      <label for="" class="form-label">Sexo</label><br><select name="sexo" id="sexo" v-model="sexo">
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
      </select><br>
      Genero favorito <br><select name="genero" id="genero" v-model="genero">
          <option value="Terror">Terror</option>
          <option value="Comedia">Comedia</option>
          <option value="Ficcion">Ficcion</option>
          <option value="Aventura">Aventura</option>
          <option value="Accion">Accion</option>
      </select>
      <br>
      <br><input type="email" class="form-control" placeholder="Correo" id="correo" v-model="correo"><br>
      <input type="password" class="form-control" placeholder="Contraseña" id="password" v-model="password"><br>
      <button type="submit" class="btn btn-primary">Registrar</button>

      

      <div v-if="error">
        {{ error }}
      </div>
      
    </form>
    
  </main>
</template>
<script>
import { auth, firebase,db} from "../firebase";

const firestore = db.collection("usuarios");

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
        firebase.auth().createUserWithEmailAndPassword(this.correo, this.password).then(user => {
          //actualizar el usuario

          if (user) {
            firestore.doc(this.correo).set({
              nombre: this.nombre,
              paterno: this.paterno,
              materno: this.materno,
              edad: this.edad,
              fecha: this.fecha,
              sexo: this.sexo,
              genero: this.genero,
              password: this.password
            }).then((u)=>{
              this.nombre = '';
              this.paterno = '';
              this.materno = '';
              this.edad = '';
              this.fecha = '';
              this.sexo = '';
              this.genero = '';
              this.correo = '';
              this.password = '';
              this.$router.push({name:'dashboard'})
            }).catch((err)=>{
              this.error=err.message;
            })
          }
 
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
