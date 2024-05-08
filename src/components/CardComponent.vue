<script setup>
const defaultImg = "https://i.imgur.com/T8Kig8u.png"
const scrum = "https://www.inesdi.com/sites/default/files/inline-images/531x354xmetodologia,P20scrum,P202.jpg.pagespeed.ic.FVz7Rkz-by.jpg"
const props = defineProps({
    course: Object
})
const imageValue = props.course.image
const isExistsImg = props.course.title == "Fundamentos do Scrum";
// const isExistsImg = !!imageValue;
import { useRouter } from 'vue-router';

var router = useRouter()

function entrarTelaCurso(courseName) {
    courseName = courseName.replaceAll(" ", "-")
    router.push({ path: `/curso-atual/${courseName}/1` })
}

</script>

<template>
    <div>
        <div id="card" :class="!isExistsImg ? 'adjust-img' : ''" @click="entrarTelaCurso(props.course.title)">
            <img :src="isExistsImg ? scrum : defaultImg" :id="!isExistsImg ? 'defaultImg' : ''">
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