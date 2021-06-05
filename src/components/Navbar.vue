<template>
    <div class="nav-bar">
        <ul class="nav-links">
            <li>
                <router-link to="/about" class="section">ABOUT</router-link>
            </li>
            <li>
                <router-link to="/experience" class="section">EXPERIENCE</router-link>
            </li>
            <li>
                <router-link to="/projects" class="section">PROJECTS</router-link>
            </li>
            <li>
                <router-link to="/activities" class="section">ACTIVITIES</router-link>
            </li>
            <li>
                <router-link to="/lets-talk" class="section contact">LET'S TALK</router-link>
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
    margin-top: 1rem;
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

.section {
    text-decoration: none;
    color: white;
}

.section:hover {
    color: #BFBFBF;
    text-decoration: var(--emphasis) solid underline;
    text-decoration-thickness: 2px;
    text-underline-position: under;
}

.contact {
    color: var(--emphasis);
}

.contact:hover {
    color: #2B2387;
}
</style>