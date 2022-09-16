<template>
  <div class="about">
    <PageHeaderComponent page-name="Projetos" />
    <ProjectPageComponent v-if="id" :projetos="malocaprop.projetos" :id="id" />  
    <ProjectsComponent  v-else :projetos="malocaprop.projetos"  />  
  </div>
</template>

<script>
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import ProjectPageComponent from "@/components/ProjectPageComponent.vue";

export default {
  name: "ProjectsView",
  components: {
    PageHeaderComponent, 
    ProjectsComponent,
    ProjectPageComponent,
  },props: {
    malocaprop: Object,
    id:{type:String},
  },
  data() {
    return {
      projeto: {}
    }
  },
 
};
</script>