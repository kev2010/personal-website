<template>
    <div class="position">
        <div class="main">
            <div>{{ title }}</div>
            <div>{{ date }}</div>
        </div>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: "Position",
    props: ['title', 'date', 'description']
};
</script>

<style scoped>
    .position {
        display: flex;
        flex-direction: column;
        color: white;
        background: var(--primary-light);
    }

    .main {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        font-size: 18px;
    }

    .description {
        font-weight: 300; 
        font-size: 18px;
        margin: 0;
    }
</style>
