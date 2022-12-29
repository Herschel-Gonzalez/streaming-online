<script setup>
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <br>
    <input type="text" v-model="resultado" v-on:keypress="buscar" placeholder="Buscar pelicula o serie">

    <div>
        {{ resultado }}
    </div>
    
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
      resultado:''
    }
  },
  name:'BuscarView',
  methods: {
    buscar(){
      resultado = this.resultado;

    },
    onMounted(){

    }
  }
}


</script>
