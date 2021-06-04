<template>
    <div class="work">
        <div class="title">
            <img src="../assets/briefcase.png" width="36px"/>
            <p style="font-weight: bold; font-size: 24px;">Experience</p>
        </div>
        <div class="information">
            <Position class="position" v-for="(position, index) in positions" :key="index" :title="position.title" :date="position.date" :description="position.description"/>
        </div>
    </div>
</template>

<script>
import Position from "./Position.vue";

export default {
    name: "Work",
    components: {
        Position
    },
    data() {
        return {
            positions: [
                {
                    title: "Entrepreneur in Residence at Pop Meals (YC S17)",
                    date: "June 2021 - August 2021",
                    description: "To do!"
                },
                {
                    title: "Machine Learning Engineer Intern at Oda (YC W20)",
                    date: "September 2020 - February 2021",
                    description: "Created website to enhance images using object detection and style transfer. Used ML and GPT-3 for recommendations."
                },
                {
                    title: "MIT 15.S50 Poker Theory Instructor",
                    date: "January 2020, January 2021",
                    description: "Taught MIT graduate seminars on poker fundamentals and topics including game theory optimal, exploitative play, and ranges. Received a teacher evaluation rating of 6.9/7.0. 60 students in 2020, 171 students in 2021."
                },
                {
                    title: "Machine Learning Engineer Intern at Instrumental",
                    date: "May 2020 - August 2020",
                    description: "Developed ML/CV visualization algorithms to explain the predictions of our anomaly detection models in production. Feature is used by ML and Product team and being productized to users. Stack: Python, PyTorch, sklearn, Jupyter"
                },
                {
                    title: "Researcher at MIT Quest for Intelligence",
                    date: "July 2019 - September 2019",
                    description: "Analyzed functional segregation of face and object processing in dual-task DCNNs. Processed training and test image data to run on various AlexNet and VGG16 models implemented in PyTorch."
                },
                {
                    title: "Researcher at MIT Research Laboratory of Electronics",
                    date: "January 2019 - September 2019",
                    description: "Developed a database for evaluating a prototype automatic speech analysis system using Praat. Analyzed speech samples using speech signal processing, linguistics, and human speech recognition"
                },
                {
                    title: "Software Engineering Intern at Ford Motor Company",
                    date: "May 2018 - July 2018",
                    description: "Created algorithm in MATLAB to detect GPS inaccuracy in vehicle-to-vehicle communication for autonomous cars."
                },
            ]
        }
  },
};
</script>

<style scoped>
.work {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--primary-light);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: white;
}

.work p {
    margin: 0;
}

.title {
    display: flex;
    align-items: center;
    margin: 1.5rem 2rem;
}

.title img {
    margin-right: 1rem;
    line-height: 1;
}

.information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 3rem 1rem 3rem;
}

.position {
    width: 100%;
    margin-bottom: 1rem;
}
</style>
