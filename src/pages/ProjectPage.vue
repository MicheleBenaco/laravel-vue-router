<template>
  <div v-if="project">
 <h1 class="text-center text-capitalize">{{ project.nome_progetto }}</h1>
        <div class="head_show">
            <section class="head_show_left">
              <p v-if="project.category"> Categoria : {{ project.category.name }}</p>
              <p v-else>Categoria non attribuita</p>
            </section>
            <section class="head_show_center">
                <p>Autore : {{ project.autore }}</p>
            </section>
            <section class="head_show_right">
                <section v-if="project.tecnologies">
                <span>Tecnologie Utilizzate : </span><span v-for="tecnology in project.tecnologies"> {{ tecnology.name }} , </span>
                </section>
                <section v-else>0</section>
            </section> 
          
        </div>
        <div class="body_show text-center">
            
                    <div v-if="project.img">
                   <img  :src="`${store.imagePath}${project.img}`" class="" >

        </div>
        <div v-else>
        <img src="/img/no_img.webp" alt="">
        </div>
            <div class="descrizione">
          <p>{{ project.descrizione }}</p>
        </div>
      
        <p>Data inizio progetto : {{ project.data_inizio_progetto }}</p>
        </div>

  </div>
  <div v-else>
  Wait
</div>

</template>

<script>
import { store } from "../store";
import axios from "axios";
export default {
  name: "ProjectPage",
  data() {
    return {
      store,
      project: null,
    };
  },
  methods: {
    getProject() {
      axios.get(`${this.store.apiURL}/projects/${this.$route.params.slug}`)
        .then((res) => {
        //  console.log(res.data.results);
          if (res.data.success) {
            this.project = res.data.results;
          } else {
            this.$router.push({ name: "NotFound" });
          }
        });
    },
  },
  mounted() {
    this.getProject();
  },
};
</script>

<style lang="scss" scoped>
.head_show_left{
flex-basis: 33.3%;
justify-self: flex-start;
margin-left: 5rem;
}
.head_show_center {
flex-basis: 33.3%;
justify-self: center;
text-align: center;
}
.head_show_right {
flex-basis: 33.3%;
display: flex;
justify-content: flex-end;
margin-right: 5rem;
}
.body_show{
        p {
                font-size: 18px;
            }
}
.my_container_show{
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: calc(100vh - 100px);
}
.head_show{
    display: flex;
    p{
        font-size: 20px;
    }
}
img{
  width: 400px;
  margin: 1rem 0;
}
.descrizione{
  padding-top: 3rem;
  padding-bottom: 1rem;
}
</style>
