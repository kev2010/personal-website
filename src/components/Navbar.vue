<template>
    <div class="nav-bar">
        <ul class="nav-links">
            <li>
                <router-link to="/about" class="about" tag="button">ABOUT</router-link>
            </li>
            <li>
                <router-link to="/experience" class="experience" tag="button">EXPERIENCE</router-link>
            </li>
            <li>
                <router-link to="/projects" class="projects" tag="button">PROJECTS</router-link>
            </li>
            <li>
                <router-link to="/activities" class="activities" tag="button">ACTIVITIES</router-link>
            </li>
            <li>
                <router-link to="/lets-talk" class="lets-talk" tag="button">LET'S TALK</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.nav-bar {
    font-family: "Cairo";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
}

.nav-links {
    list-style: none;
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
}

.nav-links li {
    display: flex;
    align-items: center;
}
</style>