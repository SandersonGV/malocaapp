<template>
  <div class="about">
    <PageHeaderComponent page-name="Projetos" />
    <ProjectsComponent :projetos="malocaprop.projetos" />  </div>
</template>

<script>
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    PageHeaderComponent, 
    ProjectsComponent,
  },props: {
    malocaprop: Object,
  },
};
</script>