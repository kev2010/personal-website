<template>
  <div class="club-info">
        <div class="content">
            <div class="main-info">
                <p class="name">{{ name }}</p>
                <p class="date">{{ date }}</p>
            </div>
            <p class="position">{{ position }}</p>
            <div class="description">
                <p class="paragraph" v-for="(paragraph, index) in description" :key="index">{{ paragraph }}</p>
                <a class="paragraph" :href="url" target="_blank">Check out our website!</a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "ClubInfo",
    props: ['name', 'url', 'date', 'position', 'description']
};
</script>

<style scoped>
.club-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    color: white;
    background: var(--primary-light);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

.content {
    margin: 2rem 4rem 2rem 4rem;
}

.main-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.name {
    font-weight: bold;
    font-size: 48px;
    color: white;
    margin: 0;
}

.date {
    font-weight: normal;
    font-size: 24px;
}

.position {
    font-weight: 600;
    font-size: 24px;
    display: flex;
    width: 100%;
    margin: 0;
}

.description {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.paragraph {
    margin: 1rem 0 0 0;
    font-weight: 300;
    font-size: 18px;
    width: 100%;
    color: white;
}
</style>
