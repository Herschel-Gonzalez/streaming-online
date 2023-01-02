<script setup>
import { onMounted } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>

    <br>
    <input type="text" class="form-control" v-model="resultado" v-on:keypress="buscar" placeholder="Buscar pelicula o serie">
    <br>
    <br>

    <div v-if="error">
        {{ error }}
    </div>

    <div v-for="(video, index) in resultados" :key="video.id">
            <div class="container">
              Duración: {{ video.duracion }}
                <a :href="video.url"><img v-bind:src="video.miniatura" alt="imagen" :width="500" id="banner" class="image"></a>
                <div class="middle">
                    <div class="text">
                        <em>{{ video.descripcion}}</em>
                    </div>
                </div>
            <h5>{{ video.titulo }} </h5><br>
            </div>
      </div>
    
  </main>
</template>
<script>


import { auth, firebase } from "../firebase";
export default{
  data() {
    return {
      media: [],
      resultados: []
    }
  },
  name:'BuscarView',
  methods: {
    buscar(){
      
      let resultado = this.resultado.toLowerCase();
      this.resultados = [];
      
      this.media = JSON.parse(localStorage.getItem("media"));

      for (let pelicula of this.media) {
        let titulo = (pelicula.titulo).toString().toLowerCase();
        if (titulo.includes(resultado)) {
          this.resultados.push(pelicula)
        }
      }

  
    },
    onMounted(){

    }
  }
}


</script>
