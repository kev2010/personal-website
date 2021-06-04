<template>
    <div class="education">
        <div class="title">
            <img src="../assets/school.png" width="36px"/>
            <p style="font-weight: bold; font-size: 24px;">Education</p>
        </div>
        <div class="information">
            <div class="school">
                <p style="font-weight: 600; font-size: 18px;">Massachusetts Institute of Technology, Cambridge, MA</p>
                <p style="font-weight: 300; font-size: 18px;">Candidate for B.S. in Computer Science</p>
            </div>
            <p style="font-weight: 600; font-size: 18px;">2018-2022</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Education",
};
</script>

<style scoped>
.education {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--primary-light);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: white;
}

.education p {
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
    justify-content: space-between;
    margin: 0rem 3rem 2rem 3rem;
}

.information p {
    margin: 0;
}

.school {
    display: flex;
    flex-direction: column;
}
</style>
