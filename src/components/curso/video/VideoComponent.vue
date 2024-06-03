<script setup>
</script>

<template>
    <div class="video-container">
        <video height="100%" controls>
            <source src="../../assets/video.mp4" type="video/mp4">
        </video>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/global.scss';

div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>