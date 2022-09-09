<template defer>
  <div class="home">
    <CarouselComponent />
    <AboutComponent />
    <ProjectsComponent  />
     <ServicesComponent />
    <TeamComponent />
  </div>
</template>

<script>
// @ is an alias to /src
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
  }
};
</script>
