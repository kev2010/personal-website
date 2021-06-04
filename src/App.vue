<template>
  <div id="app">
    <!-- Set name or it defaults to '/' in router.js -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  watch: {
  $route(to) {
     document.title = `${to.meta.title}`;
     const link = document.querySelector("[rel='icon']");
     link.setAttribute('href',to.meta.icon);
  }
}
};
</script>

<!-- global styles -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');

:root {
  --primary-main: #041021;
  --primary-light: #071C38;
  --emphasis: #5647FF;
}

* {
  box-sizing: border-box;
}

html, body {
  font-family: "Cairo", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--primary-main);
  margin: 0;
  height: 100%;
}

#app {
  height: 100%;
}
</style>