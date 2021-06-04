<template>
    <div class="coursework">
        <div class="title">
            <img src="../assets/book.png" width="36px"/>
            <p style="font-weight: bold; font-size: 24px;">Relevant Coursework</p>
        </div>
        <div class="information">
            <div class="left-section">
                <p style="font-weight: 600; font-size: 18px;">Course 6 - Computer Science</p>
                <ul>
                    <li v-for="item in computerScienceClasses" :key="item.class">
                        {{ item.class }}
                    </li>
                </ul>
            </div>
            <div class="right-section">
                <div class="management">
                    <p style="font-weight: 600; font-size: 18px;">Course 15 - Management</p>
                    <ul>
                        <li v-for="item in managementClasses" :key="item.class">
                            {{ item.class }}
                        </li>
                    </ul>
                </div>
                <div class="planning">
                    <p style="font-weight: 600; font-size: 18px;">Course 11 - Planning</p>
                    <ul>
                        <li v-for="item in planningClasses" :key="item.class">
                            {{ item.class }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Coursework",
  data() {
        return {
            computerScienceClasses: [
                { class: "6.046 - Design and Analysis of Algorithms" },
                { class: "6.031 - Elements of Software Construction" },
                { class: "6.036 - Introduction to Machine Learning" },
                { class: "6.S191 - Introduction to Deep Learning" },
                { class: "6.819 - Advances in Computer Vision (G)" },
                { class: "6.004 - Computation Structures" },
                { class: "6.033 - Computer Systems Engineering" },
                { class: "6.08 - Embedded Systems" },
                { class: "6.148 - Web Lab" },
                { class: "6.170 - Software Studio" },
                { class: "6.857 - Network and Computer Security (G)" },
                { class: "6.UAT - Oral Communication" }
            ],
            managementClasses: [
                { class: "15.3901 - New Enterprises" },
                { class: "15.393 - Nuts and Bolts of New Ventures" },
                { class: "15.S19 - Hacking the Future: Fall of COVID" },
                { class: "15.6181 - Entrepreneurship, Innovation, Startups & Law" }
            ],
            planningClasses: [
                { class: "11.159 - Entrepreneurial Negotiation" },
                { class: "11.127 - Design and Development of Games for Learning" },
                { class: "11.002 - Making Public Policy" }
            ]
        }
  },
};
</script>

<style scoped>
ul {
    font-weight: 300; 
    font-size: 18px;
    list-style: none;
    padding: 0;
    margin: 1rem 0 0 0;
}

.coursework {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--primary-light);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: white;
}

.coursework p {
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
    justify-content: center;
    margin: 0rem 3rem 2rem 3rem;
}

.left-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 4rem;
}

.right-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 4rem;
}

.management, .planning {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.planning {
    margin-top: 4rem;
}
</style>
