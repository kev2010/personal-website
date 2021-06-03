<template>
  <div class="app">
    <Navbar class="navbar"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Main",

  components: {
    Navbar
  }
};
</script>

<style scoped>
.app {
  background-color: var(--primary-main);
  display: flex;
  justify-content: center;
}

.navbar {
  width: 40%;
}
</style>
