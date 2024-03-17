<script setup>
const props = defineProps(['title'])

</script>

<template>
    <header>
        <div id="header-component">
            <p id="title">
                {{ props.title }}
            </p>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

header {
    float: right;
}

div {
    background-color: $header-light-gray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 90px;
}

#title {
    font-family: $font-style;
    font-weight: bold;
}
</style>