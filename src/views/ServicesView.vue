<template>
  <div class="servicos">
    <PageHeaderComponent page-name="Serviços" />
     <ServicesComponent />
    <ProjectsComponent exibir="3" />
  </div>
</template>

<script>
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: "ServicesView",
 components: {
    PageHeaderComponent, 
    ServicesComponent,
    ProjectsComponent,
  }
};
</script>