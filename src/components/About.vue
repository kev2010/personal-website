<template>
  <div class="about">
      <div class="blurb">
        <p style="font-weight: 600; font-size: 24px;">Hello, I'm</p>
        <span class="name typing">Kevin Jiang</span>
        <p style="font-weight: bold; font-size: 24px;">MIT Computer Science Student</p>
        <div class="position">
          <img class="arrow" src="../assets/arrow.png"/>
          <p style="font-weight: normal; font-size: 18px;">Entrepreneur in Residence at Pop Meals</p>
        </div>
        <p class="content" style="font-weight: 300; font-size: 18px; ">
          Focused on building and scaling projects! I love entrepreneurship,
           machine learning, and mobile/web development. In my free time, 
           I’m passionate about taekwondo, poker, meditation, reading, and Clubhouse.
           Check out the website to see what I'm involved in!
        </p>
        <div class="links">
            <a href="https://www.facebook.com/kevin.jiang.7186/" target="_blank">
                <img src="../assets/facebook.png" width="24px"/>
            </a>
            <a href="https://www.instagram.com/kev2024/" target="_blank">
                <img src="../assets/instagram.png" width="24px"/>
            </a>
            <a href="mailto:kev2018@mit.edu">
                <img src="../assets/email.png" width="24px"/>
            </a>
            <a href="https://github.com/kev2010" target="_blank">
                <img src="../assets/github.png" width="24px"/>
            </a>
        </div>
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
@keyframes type {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.05em solid #FFFFFF;
    }
    100% {
      opacity: 1;
    }
}

@-webkit-keyframes type {
    0% {
      width: 0;
    }
    1% {
      opacity: 1;
    }
    99.9% {
      border-right: 0.05em solid #FFFFFF;
    }
    100% {
      opacity: 1;
    }
}

@keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #FFFFFF; }
}

@-webkit-keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #FFFFFF; }
}

@keyframes fadeInAnimation { 
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
     } 
} 

.about {
  background-color: var(--primary-main);
  display: flex;
  align-items: center;
  justify-content: center;

    animation: fadeInAnimation ease 1.5s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
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
    display: flex;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    border-right: 0.05em solid #FFFFFF;

    font-weight: bold; 
    font-size: 64px;
    margin: 1rem 0;

    line-height: 1.3;
}

.typing {
    width: 310px;
    opacity: 0;
    -webkit-animation: type 1s steps(20, end), blink 1s step-end infinite;
    animation: type 1s steps(20, end), blink 1s step-end infinite;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
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

.links {
    display: flex;
    margin-top: 2rem;
}

.links img {
    margin-right: 1.5rem;
}

.kevin {
    width: 40%;
    margin-left: 2rem;
}
</style>
