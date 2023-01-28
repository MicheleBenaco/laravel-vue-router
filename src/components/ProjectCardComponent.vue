<template>
    <div class="col-sm-12 col-md-6 col-lg-4">
        <p class="title_card">{{ obj.nome_progetto }}</p>
        <div v-if="obj.img">
                   <img  :src="`${store.imagePath}${obj.img}`" class="card-img-top" >

        </div>
        <div v-else>
        <img src="/img/no_img.webp" alt="">
        </div>
        <p class="descrizione">{{ this.trimText(obj.descrizione) }}</p>
         <router-link
        :to="{ name: 'ProjectPage', params: { slug: obj.slug } }"
        class="btn btn-primary"
        >Visualizza il dettaglio del progetto</router-link
      >
    </div>
</template>

<script>
import { store } from '../store';
    export default {
    name: 'ProjectCardComponent',
    props: ["obj"],
    data() {
        return {
            store,
            textlength : 30,
        }
    },
    methods: {
        trimText(text){
            if(text.length > this.textlength){
                return text.substr(0,this.textlength) + '...';
            }
            return text;
           }
    }
        
    }
</script>

<style lang="scss" scoped>
img{
    width: 100%;
    height: 300px;
}
.title_card{
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
}
</style>