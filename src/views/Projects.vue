<template>
  <div class="main">
    <Navbar class="navbar"/>
    <p class="title">Fun Projects!</p>
    <div class="projects" v-for="(project, index) in projectList" :key="index">
      <div class="project-card">
        <div class="left-section">
            <p style="font-weight: bold; font-size: 48px; line-height: 1.3;">{{ project.title }}</p>
            <p style="font-weight: normal; font-size: 24px; margin-bottom: 2rem;">{{ project.date }}</p>
            <video v-if="project.video" controls autoplay loop width="100%">
                <source :src="project.src"
                        type="video/mp4">
            </video>
            <img v-else :src="project.src"/>
        </div>
        <div class="right-section">
            <p style="font-weight: 300; font-size: 18px; margin-top: 2rem;" v-for="(paragraph, indexTwo) in project.description" :key="indexTwo">{{ paragraph }}</p>
            <span style="margin-top: 2rem"/>
        </div>
      </div>
    </div>
    <p style="color: #041021; margin: 0;"> hi pt2 ;)</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Projects",

  components: {
    Navbar
  },

  data() {
        return {
            projectList: [
                {
                    title: "Tribe",
                    date: "August 2019 - Present",
                    video: true,
                    src: require("../assets/tribeDemo.mp4"),
                    description: [
                      "Cofounder of an app that connects users to live user-hosted events. As a college student, it’s difficult to know what events are happening around you \
                      unless you’re in the right mailing lists, you’re in the right Facebook group, you happen to see an event poster, you hear from word of mouth, or you just happen \
                      to be in the right place at the right time. Additionally, it’s hard for students to organize and publicize their own spontaneous events (e.g. impromptu game nights \
                      in dorms). We solve these problems by creating an interactive map-based app that shows you not only what live events are happening around you, but also where your \
                      friends are!",
                      "Our team was accepted in the MIT Sandbox Program, MIT Venture Mentoring Service, and Baker Foundation. With no prior app development experience, I \
                      picked up Swift to help build an MVP for the beachhead market of MIT students."
                    ]
                },
                {
                    title: "Collegiate Series of Poker",
                    date: "August 2020 - Present",
                    video: true,
                    src: require("../assets/CSOP.mp4"),
                    description: [
                      "Cofounder of first publicly accessible collegiate poker tournament. We created the Collegiate Series of Poker (CSOP) to bring together poker communities\
                      across the nation’s colleges. Our organization received $20,000 in funding from corporate sponsors. After marketing to US college students, we gained 457 signups across\
                      more than 20 different colleges. At the conclusion of our inaugural tournament on May 8th, 2021, we distributed $15,000 in prizes and shipped CSOP gear to participants\
                      across the nation.",
                      "Website: https://www.pokercsop.com/",
                      "Facebook: https://www.facebook.com/PokerCSOP"
                    ]
                },
                {
                    title: "PoomsAI",
                    date: "November 2019 - January 2020",
                    video: true,
                    src: require("../assets/poomsAI.mp4"),
                    description: [
                      "Co-creator of PoomsAI, an accuracy auto-grader for Taekwondo Poomsae using computer vision. Automating the accuracy grading helps make judging easier since\
                       human judges are easily error-prone due to the number of criteria to watch. Our approach consists of taking video footage of a competitor’s performance, \
                       determining the competitor’s pose through keypoint identification using OpenPose, and then analyzing the coordinates of the 2D pose estimation to provide \
                       accuracy scores. Experiments show that our model performs on par with human judging on mediocre-to-good performances.",
                      "GitHub: https://github.com/p1ck-4-u53rn4m3/poomsae-grader",
                      "Paper: https://github.com/p1ck-4-u53rn4m3/poomsae-grader/blob/master/PoomsAI%20Paper.pdf"
                    ]
                },
                {
                    title: "Safeskiii",
                    date: "November 2020 - December 2020",
                    video: false,
                    src: require("../assets/safeskiii.png"),
                    description: [
                      "Co-creator of Safeskiii, which is a commenting and broadcasting app for Alta, Utah. A ski lounge can use it to inform its residents about current events that\
                       also incorporates a “check in” system for visitors to report their visiting time, which can help prevent crowding in this time of COVID. Done as a project\
                       using VueJS, which is what this personal website was built on!",
                      "Website: https://safeskiii-app.herokuapp.com/"
                    ]
                },
                {
                    title: "Mazescape",
                    date: "May 2020 - June 2020",
                    video: false,
                    src: require("../assets/mazescape.png"),
                    description: [
                      "Co-creator of Mazescape, a Pygame based game designed to introduce key concepts of robotics like localization, SLAM, and odometry to younger audiences\
                       (e.g. high school freshman). The player is placed into a haunted maze and must find the pentagram to escape!",
                      "GitHub: https://github.com/The-Ripp3r/Mazescape"
                    ]
                },
            ]
        }
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

.title {
  font-weight: bold; 
  font-size: 64px; 
  color: white;
  margin: 2rem;

  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;
}

.projects {
  width: 70%;
  margin-bottom: 4rem;

  animation: fadeInAnimation ease 1s;
  animation-iteration-count: 1; 
  animation-fill-mode: forwards;
}

.project-card {
    display: flex;
    justify-content: center;
    background: var(--primary-light);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: white;
}

.project-card p {
    margin: 0;
}

.left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 4rem 2rem 0;
    width: 40%;
}

.right-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0 2rem 4rem;
    width: 40%;
}
</style>
