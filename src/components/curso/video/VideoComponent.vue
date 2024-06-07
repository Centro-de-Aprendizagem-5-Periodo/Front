<script setup>
import { ref } from 'vue'

const props = defineProps({
    video: String
})

let videoSrc = ref()

import(`../../../assets/${props.video}`).then(videoImports => {
  videoSrc.value = videoImports.default
})
</script>

<template>
    <div class="video-container">
        <video height="100%" controls>
            <source v-if="videoSrc" :src="videoSrc" type="video/mp4">
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