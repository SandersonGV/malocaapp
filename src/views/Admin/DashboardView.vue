<template>
    <div class="dashboardContainer">
        <router-view />
    </div>
</template>

<script>
export default {
  name: "DashboardView",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
/* Set a background image by replacing the URL below */
.container-xxl {
  background: url('https://source.unsplash.com/twukN12EN7c/1920x1080') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}

body, .dashboardContainer{
  height: 100vh;
}
</style>