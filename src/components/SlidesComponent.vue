<script setup>
const props = defineProps({
    slides: Array
});

function showSlide(slideIndex) {
    const firstIndex = 0
    const lastIndex = props.slides.length - 1
    if (slideIndex > lastIndex) { slideIndex = firstIndex }
    if (slideIndex < firstIndex) { slideIndex = lastIndex }

    for (let i = 0; i <= lastIndex; i++) {
        document.getElementById(`slide-${i}`).className = "slide-hidden fade";
    }
    document.getElementById(`slide-${slideIndex}`).className = "slide-visible fade";
}
</script>

<template>
    <div v-bind:id="`slide-${index}`" :class="`${index == 0 ? 'slide-visible' : 'slide-hidden'}`"
        v-for="(slide, index) in props.slides">
        <span id="page-number">{{ index + 1 }} / {{ props.slides.length }}</span>
        <i><font-awesome-icon id="previous" icon="chevron-left" color="#ebe1e1" size="2x"
                v-bind:onClick="() => showSlide(index - 1)"></font-awesome-icon></i>
        <i><font-awesome-icon id="next" icon="chevron-right" color="#ebe1e1" size="2x"
                v-bind:onClick="() => showSlide(index + 1)"></font-awesome-icon></i>
        <img v-bind:src="slide">
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

div {
    height: 60dvh;
    width: 50dvw;
    //margin: auto;
    // margin-top: 10dvh;
    //margin-bottom: 10dvh;
    position: relative;
}

.slide-hidden {
    display: none;
}

.slide-visible {
    display: block;
}

img {
    height: 100%;
    width: 100%;
}

#previous,
#next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transition: 0.6 ease;
    padding: 16px;
    border-radius: 0 8px 8px 0;
}

#next {
    right: 0;
    border-radius: 8px 0 0 8px;
}

#page-number {
    color: black;
    padding: 8px 12px;
    position: absolute;
    top: 100%;
}

#previous:hover,
#next:hover {
    background-color: rgba(0, 0, 0, 0.8);
}

.fade {
    animation-name: fade;
    animation-duration: 1.5s;
}

@keyframes fade {
    from {
        opacity: .4
    }

    to {
        opacity: 1
    }
}
</style>