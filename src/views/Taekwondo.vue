<template>
  <div class="taekwondo">
    <Navbar class="navbar"/>
    <ActivitiesNavbar class="activities-navbar"/>
    <div class="content">
        <p class="title">Taekwondo</p>
        <p class="description">
            I’ve practiced, coached, and competed in Taekwondo since 2006. It’s a sport that I’ve loved not 
            only because kicking and punching is fun, but also because of all the other lessons you learn along the way: discipline, 
            a hard work ethic, the value of teamwork, and constant adaptation. As a national and international competitor, I’ve had 
            the privilege of being a Team USA National Team Member four times. The experiences I’ve gained from being a student, 
            competitor, and coach have been invaluable to me.
        </p>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/yJeKB3qok2o?start=2378&end=2463" autoplay title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="description">Here are some of my all-time favorite experiences I’ve had!</p>
        <ol class="experiences">
            <li>Making the USA National A-Team for the first time in 2017</li>
            <li>Representing USA and winning gold at the 2017 Pan-American International Championships in Costa Rica</li>
            <li>Got bronze in the 2019 World Taekwondo World Cup Championships in Wuxi, China</li>
            <li>Competing in the USA Team Trials for the Pan American Olympic Games</li>
            <li>Travelling to train in Seoul, South Korea with a Korean master!</li>
            <li>Visting and training at Puerto Rico as part of the Eastern Collegiate Taekwondo Conference All-Star Team</li>
            <li>The countless hours spent training alongside great teammates!</li>
        </ol>
        <p class="description">
            Feel free to check out my <a href="https://www.teamusa.org/usa-taekwondo/athletes/Kevin-Jiang">Team USA profile</a> if you 
            want a competition record up to 2017. The page is missing some of my most recent competitions like the World Taekwondo 
            World Cup, 2020 Pan-American International Championships, and recent national championships.
        </p>
    </div>
    <p style="color: #041021; margin: 0;"> hi pt4 ;)</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ActivitiesNavbar from "../components/ActivitiesNavbar.vue";

export default {
  name: "Taekwondo",

  components: {
    Navbar,
    ActivitiesNavbar
  },
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

.taekwondo {
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
}

.content {
    width: 70%;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;

    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
}

.title {
    font-weight: bold;
    font-size: 48px;
    margin: 0;
}

.description {
    font-weight: 300;
    font-size: 18px;
    margin: 0;
    width: 100%;
}

.experiences {
    font-weight: 300;
    font-size: 18px;
}

a {
    color: white;
}

iframe {
    margin: 4rem 0;
    width: 60%;
}
</style>
