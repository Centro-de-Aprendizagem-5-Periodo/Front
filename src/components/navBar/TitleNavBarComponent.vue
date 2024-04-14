<script setup>
const props = defineProps(['title'])
</script>

<template>
    <div class="main">
        <i style="font-size:x-large"><font-awesome-icon class="icon" icon="star" color="#ebe1e1" /></i>
        <p>{{ props.title }}</p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/global.scss';

.main {
    padding: 35px 35px 10px 35px;
}

p {
    color: #e3dada;
    font-family: $font-style;
    font-size: 18px;
}

.main {
    display: flex;
    align-items: center;
    gap: 5px;
}
</style>