<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>

    <div>
      
      <template v-if="user">

        <div class="menu">
          
        <RouterLink to="/dashboard"> <h1> Dashboard </h1> </RouterLink>
        <button @click.prevent="logout" class="btn btn-warning">Cerrar sesion</button>

        </div>
        
        
      </template>
      
      <template v-else >
       
        <nav>
          <RouterLink to="/login">Login | </RouterLink>
          <RouterLink to="/registro">Registro</RouterLink>
        </nav>
       
        
      </template>

      
      
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.menu{
  padding-right: 12cm;
  padding-top: 10px;
  
}



</style>



<script>

import firebase from 'firebase';

export default{
  data(){
    return {
      user: null
    }

  },
  methods: {
    logout(){
      firebase.auth().signOut().then(()=>{
        this.$router.push({name:'login'})
      })
    }
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.user=user;
      }else{
        this.user=null;
      }
    })
  }
}

</script>