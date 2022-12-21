<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <input type="text" placeholder="Nombre">
    <input type="text" placeholder="Apellido Paterno">
    <input type="text" placeholder="Apellido Materno">
    <input type="number" placeholder="Edad">
    <input type="date" placeholder="Fecha de nacimiento">
    Sexo<select name="sexo" id="sexo">
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
    </select>
    <select name="genero" id="genero">
        <option value=""></option>
    </select>
    <button>Registrar</button>
  </main>
</template>
