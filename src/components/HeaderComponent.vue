<script setup> 
const props = defineProps(['title'])
</script>

<template>
    <header>
        <p id="title">
            {{props.title}}
        </p>
    </header>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

header {
    background-color: $header-light-gray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
}

#title {
    font-family: $font-style;
    font-weight: bold;
    font-size: $title-font-size;
}

</style>