<template>
  <div class="clubhouse">
    <Navbar class="navbar"/>
    <ActivitiesNavbar class="activities-navbar"/>
    <div class="content">
        <p class="title">Clubhouse</p>
        <p class="description">
            A friend of mine introduced me to Clubhouse in the middle of February of 2021. I joined some rooms to listen to what other people were talking about, and I
            discovered how easy it was to spontaneously start a room and get people to join and listen. There wasn't much of an MIT presence on the app at the time, so
            I showed the app to a friend of mine, and we started hosting rooms on the app. We started a "What's the Future of Technology?" series where we host live Q&A
            sessions with a diverse set of panelists including MIT professors, CEOs, artists, and researchers.
        </p>
        <p></p>
        <p class="description">
            We ended up hosting around 5 or 6 talks, where the first several talks would last around 4 hours with an average of 700 live listeners. Our biggest talk had
            2100 live listeners at one point. The closest screenshot I could find is below on the left:
        </p>
        <p></p>
        <div class="screenshots">
            <img src="../assets/clubhouseRoom.png" width="20%"/>
            <img src="../assets/clubhousePeople.png" width="20%"/>
        </div>
        <p></p>
        <p class="description">
            Our panelists included notable people such as: AI scientist and podcaster Lex Fridman, film producer (Despicable Me and Angry Birds) and exec member (Ice Age and
            Alvin and the Chipmunks) John Cohen, South Korea's first astronaut Soyeon Yi, AI Professor Dekai Wu, cryptographer Yael Kalai, voice coach Roger Love, beatboxer
            Harry Yeff (AKA Reeps One), as well as other MIT researchers, startup founders, and investors. You can see Lex Fridman and John Cohen as panelists in the 
            screenshot above on the right.
        </p>
        <p></p>
        <p class="description">I also co-founded the club "The Horizon", where we host talks like the future of technology as well as other emerging topics. We have grown
            to around 1.8k followers as of now.
        </p>
    </div>
    <p style="color: #041021; margin: 0;"> hi pt4 ;)</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ActivitiesNavbar from "../components/ActivitiesNavbar.vue";

export default {
  name: "Clubhouse",

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

.clubhouse {
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

.screenshots {
    display: flex;
    justify-content: center;
}

img {
    margin: 0 4rem;
}

a {
    color: white;
}
</style>
