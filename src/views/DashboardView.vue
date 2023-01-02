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
        
        <div class="menu">
           
            <button v-on:click="buscar" class="btn btn-light">Buscar</button><br><br>
        </div>

        
        

        

        <div v-for="(video, index) in media" :key="video.id">
            <div class="container">
                Duración: {{ video.duracion }}
                <a :href="video.url"><img v-bind:src="video.miniatura" alt="imagen" :width="500" id="banner" class="image"></a>
                <div class="middle">
                    <div class="text">
                        <em>{{ video.descripcion}}</em>
                    </div>
                </div>
            <h5>{{ video.titulo }}</h5><hr>
            </div>
        </div>

    </main>


</template>

<style>

.menu{
  padding-right: 12cm;
  padding-top: 10px;
}

.container {
            position: relative;
        }

        .image {
            opacity: 1;
            display: block;
            width: 100%;
            height: auto;
            transition: .5s ease;
            backface-visibility: hidden;
        }

        .middle {
            transition: .5s ease;
            opacity: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            text-align: center;
        }

        .container:hover .image {
            opacity: 0.5;
        }

        .container:hover .middle {
            opacity: 1;
        }

        .text {
            color: white;
            font-size: 16px;
            padding: 16px 32px;
        }

        .col-md {
            padding-left: 50px;
        }

        input::placeholder {
            font-style: italic;
        }



</style>


