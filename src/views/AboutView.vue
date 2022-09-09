<template>
  <div class="about">
    <PageHeaderComponent page-name="Sobre-nós" />
    <AboutComponent  />
    <TeamComponent  />
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import TeamComponent from "@/components/TeamComponent.vue";

export default {
  name: "AboutView",
  components: {
    PageHeaderComponent,
    AboutComponent,
    TeamComponent,
  },
  
  data() {
    return {
    };
  }
};
</script>