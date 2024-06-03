<script setup>
const defaultImg = "https://i.imgur.com/T8Kig8u.png"
const props = defineProps({
    course: Object
})
const isExistsImg = props.course.img !== "";
import { useRouter } from 'vue-router';

var router = useRouter()

async function entrarTelaCurso() {
    var courseName = props.course.title.replaceAll(" ", "-")
    await router.push({path: `/curso/${courseName}/1`})
}

</script>

<template>
    <div>
        <div :id="`${props.course.title}`" class="adjust-img" @click="entrarTelaCurso()">
            <img :src="isExistsImg ? props.course.img : defaultImg" :id="`${props.course.title}-image`">
        </div>
        <div id="titleArea" @click="entrarTelaCurso">
            <p>{{ props.course.title }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

img {
    width: 100%;
}

p {
    padding-left: 10px;
}

.adjust-img {
    justify-content: center;
    align-items: center;
}

#card {
    display: flex;
    border: 1px solid $gray;
    border-bottom-width: 0;
    width: 18vw;
    min-width: 220px;
    height: 180px;
    cursor: pointer;
    transition: 0.5s;
}

#titleArea {
    display: flex;
    align-items: center;
    border: 1px solid $gray;
    border-top-width: 0;
    background-color: $light-gray;
    font-family: $font-style;
    font-weight: 600;
    width: 18vw;
    min-width: 220px;
    height: 40px;
    cursor: pointer;
    transition: 0.5s;
}

#card:hover, #titleArea:hover, #card:hover + #titleArea, #card:has(+ #titleArea:hover) {
    transform: scale(1.1);
}
</style>