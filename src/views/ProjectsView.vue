<template>
  <div class="about">
    <PageHeaderComponent page-name="Projetos" />
    <ProjectsComponent :projetos="projetos" />
  </div>
</template>

<script>
import MalocaInfo from "@/models/malocainfo";
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    PageHeaderComponent, 
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