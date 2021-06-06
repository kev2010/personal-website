<template>
  <div class="main">
    <Navbar class="navbar"/>
    <ActivitiesNavbar class="activities-navbar"/>
    <ClubInfo class="clubs" v-for="(club, index) in clubs" :key="index" :name="club.name" :url="club.url" :date="club.date" :position="club.position" :description="club.description"/>
    <p style="color: #041021; margin: 0;"> hi pt3 ;)</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ActivitiesNavbar from "../components/ActivitiesNavbar.vue";
import ClubInfo from "../components/ClubInfo.vue";

export default {
  name: "Activities",

  components: {
    Navbar,
    ActivitiesNavbar,
    ClubInfo
  },

  data() {
      return {
          clubs: [
              {
                  name: "MIT Poker Club",
                  url: "http://poker.mit.edu/",
                  date: "September 2018 - Present",
                  position: "Co-President 2020 - 2022, Committee Member 2019 - 2020",
                  description: [
                      "MIT Poker Club (MPC) provides a fun, spirited learning environment for poker enthusiasts and novices alike, \
                      fostering a passion for learning mathematical and analytical skills. With more than 1500 students signed up for \
                      our club’s mailing list, we aim to increase the opportunities for community members to share poker experiences, \
                      grow as poker players, and become better critical thinkers and problem solvers.",
                      "As co-president, I help create and organize events such as workshops, study breaks, tournaments, intercollegiate\
                       mixers, company sponsor events, professional poker player guest lectures, and general body meetings for hundreds \
                       of students. I lead new initiatives to improve our club internally and scale our club’s reach to be the forefront \
                       of the collegiate poker scene. I also develop poker curriculums to teach MIT undergraduates in the fall semester \
                       and Sloan MBA students in graduate seminars."
                  ]
              },
              {
                  name: "MIT Engineering Innovation Group",
                  url: "https://www.miteig.com/",
                  date: "May 2020 - Present",
                  position: "Cofounder",
                  description: [
                      "MIT Engineering Innovation Group (EIG) is a project incubator that focuses on building cross-disciplinary student \
                      teams to tackle real-world problems. Many students have the passion to build out an idea that they have or to join \
                      a team with an idea, but they don’t know where to start. Our group’s core mission is to empower these students with \
                      the knowledge and skills to go from idea to execution. At the end of each cohort, students are exposed to real-world \
                      tech-focused problems from around the community and gain valuable experience in core skills such as building engineering \
                      solutions, teamwork, entrepreneurship, and product design.",
                      "As a cofounder, I helped build our executive team and form partnerships with the MIT Innovation Initiative, Martin Trust \
                      Center for Entrepreneurship, and MIT Beaverworks. With more than 100 students interested in joining, our first cohort will \
                      be in the Fall of 2021."
                  ]
              }
          ]
      }
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
}

.clubs {
    width: 80%;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
}
</style>
