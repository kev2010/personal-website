<template>
  <div class="poker">
    <Navbar class="navbar"/>
    <ActivitiesNavbar class="activities-navbar"/>
    <div class="content">
        <p class="title">Poker</p>
        <p class="description">
            I started studying and playing poker seriously when I came to MIT my freshman year. While I enjoy cash games, I consider myself more of a tournament player, 
            where I play both live and online tournaments (more of the latter). I love playing tournaments because of the mental game required (meditation and taekwondo
            help with this!), the constantly changing equilibrium that forces you to adapt quickly and creatively, and the high risk, high reward nature! In addition to
            being the co-president of the MIT Poker Club, I also teach poker to MIT undergraduates, graduates, and Sloan MBA students in MIT graduate seminars. My main
            methods of studying include PioSolver simulations and the Raise Your Edge Tournament Masterclass. 
        </p>
        <p></p>
        <p class="description">
            Online, I currently play midstakes multi-table tournaments (MTTs) with $30 to $50 buy ins on Ignition Casino. You can see my recent tournament results, which
            include both low stakes sit & go's and low/mid stakes MTTs, below:
        </p>
        <p></p>
        <img src="../assets/results.png" width="80%"/>
        <p></p>
        <p class="description">For live tournaments, I play in the MIT/Harvard SIG Main Events where I got first place in the 2019 MIT Spring SIG Tournament for $500 and
            second place in the 2021 MIT/Harvard SIG Tournament for $400.
        </p>
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
  name: "Poker",

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

.poker {
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
