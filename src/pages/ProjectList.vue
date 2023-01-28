<template>

  <div class="row my_container mb-5">
    <ProjectCardComponent v-for="project in projects" :obj="project"></ProjectCardComponent>

  </div>
      <nav class="d-flex flex_end">
  <ul class="pagination flex_end"> 
  
    <li class="page-item" v-for="page in lastPage"><a class="page-link" @click="getProjects(page)">{{page}}</a></li>    
  </ul>
</nav>
  
</template>

<script>

import ProjectCardComponent from "../components/ProjectCardComponent.vue";
import { store } from "../store";
import axios from "axios";
export default {
  name: "ProjectList",
 components: { ProjectCardComponent },
  data() {
    return {
      store,
      projects: [],
      descriptionLenght: 100,
      currentPage: 1,
      lastPage: null,
      totalPage : 0,
      
    };
  },
  methods: {
    getProjects(page) {
      axios.get(`${this.store.apiURL}/projects`,{params:{page:page}}).then((res) => {
        this.projects = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
        this.totalPage = res.data.results.total;
        console.log(res.data.results.last_page)
      });
    },
  },
  mounted() {
    this.getProjects(this.currentPage);
  },
};
</script>

<style lang="scss" scoped>
img{
  width: 200px;
}
.my_container{
  padding-top: 2rem;
}
a{
  cursor: pointer;
}
.flex_end{
margin-left: 80%;
}
</style>

