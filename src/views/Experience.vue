<template>
  <div class="main">
    <Navbar class="navbar"/>
    <Education class="card"/>
    <Coursework class="card"/>
    <Work class="card"/>
    <p>hi :)</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Education from "../components/Education.vue";
import Coursework from "../components/Coursework.vue";
import Work from "../components/Work.vue";

export default {
  name: "Experience",

  components: {
    Navbar,
    Education,
    Coursework,
    Work
  }
};
</script>

<style scoped>
@keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
} 

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

.card {
    width: 70%;
    margin: 1rem 0;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
}
</style>
