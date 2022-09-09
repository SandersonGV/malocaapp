<template>
  <div class="about">
    <PageHeaderComponent page-name="Projetos" />
    <ProjectsComponent />
  </div>
</template>

<script>
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    PageHeaderComponent, 
    ProjectsComponent,
  }
};
</script>