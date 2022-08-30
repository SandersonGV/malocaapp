<template>
  <div class="servicos">
    <PageHeaderComponent page-name="Serviços" />
     <ServicesComponent :servicos="maloca.servicos" />
    <ProjectsComponent :projetos="projetos" />
  </div>
</template>

<script>
import MalocaInfo from "@/models/malocainfo";
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: "ServicesView",
 components: {
    PageHeaderComponent, 
    ServicesComponent,
    ProjectsComponent,
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
      this.projetos = this.maloca.projetos.splice(0,3);
    },
  },
  created() {
    this.loadMalocainfo();
  },
};
</script>