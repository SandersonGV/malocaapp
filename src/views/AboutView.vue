<template>
  <div class="about">
    <PageHeaderComponent page-name="Sobre-nós" />
    <AboutComponent :malocaprop="malocaprop"/>
    <TeamComponent :time="malocaprop.team" />
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
  props: {
    malocaprop: Object,
  },
  data() {
    return {};
  },
  mounted() {
  },
};
</script>