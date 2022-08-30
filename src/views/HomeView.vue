<template>
  <div class="home">
    <CarouselComponent :destaques="destaques" />
    <AboutComponent />
    <ProjectsComponent :projetos="projetos" />
     <ServicesComponent :servicos="maloca.servicos" />
    <TeamComponent :team="maloca.time" />
  </div>
</template>

<script>
// @ is an alias to /src
import MalocaInfo from "@/models/malocainfo";
import AboutComponent from "@/components/AboutComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";

export default {
  name: "HomeView",
  components: {
    CarouselComponent, 
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    TeamComponent,
  },
   data() {
    return {
      maloca: {},
      destaques:[],
      projetos:[],
    };
  },
  methods: {
    loadMalocainfo: function () {
      this.maloca = new MalocaInfo();
      this.destaques = this.maloca.projetos.splice(0,2);
      this.projetos = this.maloca.projetos.splice(0,3);
    },
  },
  created() {
    this.loadMalocainfo();
  },
};
</script>
