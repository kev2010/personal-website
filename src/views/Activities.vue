<template>
  <div class="main">
    <Navbar class="navbar"/>
    <ActivitiesNavbar class="activities-navbar"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ActivitiesNavbar from "../components/ActivitiesNavbar.vue";

export default {
  name: "Activities",

  components: {
    Navbar,
    ActivitiesNavbar
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
  height: 100%;
}

.navbar {
  width: 40%;
}

.activities-navbar {
  width: 25%;
  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;
}
</style>
