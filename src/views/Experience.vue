<template>
  <div class="main">
    <Navbar class="navbar"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Experience",

  components: {
    Navbar
  }
};
</script>

<style scoped>
.main {
  background-color: var(--primary-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.navbar {
  width: 40%;
}
</style>
