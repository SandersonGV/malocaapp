<template>
  <div class="about">
    <PageHeaderComponent page-name="Entre em contato conosco" />
    <ContactComponent :malocainfo="malocainfo"/>
  </div>
</template>

<script>
import PageHeaderComponent from "@/components/PageHeaderComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "ContactView",
  components: {
    PageHeaderComponent,
    ContactComponent
  }, props: {
    malocainfo: Object
  }
};
</script>