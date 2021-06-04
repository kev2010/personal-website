<template>
  <div class="about">
      <div class="blurb">
        <p style="font-weight: 600; font-size: 24px;">Hello, I'm</p>
        <p class="name" style="font-weight: bold; font-size: 64px;">Kevin Jiang</p>
        <p style="font-weight: bold; font-size: 24px;">MIT Computer Science Student</p>
        <div class="position">
          <img class="arrow" src="../assets/arrow.png"/>
          <p style="font-weight: normal; font-size: 18px;">Entrepreneur in Residence at Pop Meals</p>
        </div>
        <p class="content" style="font-weight: 300; font-size: 18px; ">
          Focused on building and scaling projects! I love entrepreneurship,
           machine learning, and mobile/web development. In my free time, 
           I’m passionate about taekwondo, poker, meditation, reading, and Clubhouse.
        </p>
      </div>
      <img src="../assets/kevin.png" class="kevin"/>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.about {
  background-color: var(--primary-main);
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  width: 40%;
}

.blurb {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  margin-bottom: 6rem;
}

.blurb p {
    margin: 0;
    width: 450px;
}

.name {
    line-height: 1.5;
}

.position {
    display: flex;
    margin: 24px 0;
}

.arrow {
    width: 20px;
    height: 20px;
    margin: 0 1rem;
}

.content {
    width: 65%;
}

.kevin {
    width: 700px;
    margin-left: 2rem;
}
</style>
