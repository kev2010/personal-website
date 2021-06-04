<template>
  <div class="main">
    <Navbar class="navbar"/>
    <About class="about"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import About from "../components/About.vue";

export default {
  name: "Main",

  components: {
    Navbar,
    About
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

.about {
  width: 80%;
}
</style>
