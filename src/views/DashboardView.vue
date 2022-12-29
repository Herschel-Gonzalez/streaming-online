<script>
import { auth, firebase, db } from "../firebase";

const firestore = db.collection("media");

const data = [];
db.collection("media").get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            let media = doc.data();
            data.push(media);
        });
        localStorage.setItem("media", JSON.stringify(data));
    })
    .catch(function (error) {
        console.log("Error al obtener los archivos multimedia: ", error);
    });

const media = JSON.parse(localStorage.getItem("media"));

export default {
    data() {
        return {
            media
        }
    },
    name: 'DashboardView',
    methods: {
        buscar() {
            console.log("Buscar");
            this.$router.push({ name: 'buscar' });
        }
    }
}


</script>

<template>
    <main>
        <div class="content">
            Dashboard
        </div>

        <button v-on:click="buscar">Buscar</button><br>

        <div v-for="(video, index) in media" :key="video.id">

            <a :href="video.url"><img v-bind:src="video.miniatura" alt="imagen" :width="300"></a><br>
            {{ video.titulo }}

        </div>

    </main>


</template>


