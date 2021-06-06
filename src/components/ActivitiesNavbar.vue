<template>
    <div class="nav-bar">
        <ul class="nav-links">
            <li>
                <router-link to="/activities/mit-clubs" class="section">MIT Clubs</router-link>
            </li>
            <li>
                <router-link to="/activities/taekwondo" class="section">Taekwondo</router-link>
            </li>
            <li>
                <router-link to="/activities/poker" class="section">Poker</router-link>
            </li>
            <li>
                <router-link to="/activities/clubhouse" class="section">Clubhouse</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ActivitiesNavbar"
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
    padding: 0;
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
</style>