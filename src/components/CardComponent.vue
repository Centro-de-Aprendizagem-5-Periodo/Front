<script setup>
const defaultImg = "https://i.imgur.com/T8Kig8u.png"
const props = defineProps({
    course: Object
})
const isExistsImg = props.course.img !== "";
import { useRouter } from 'vue-router';

var router = useRouter()

const couseContent = [
    {
        part: 1,
        pageType: "slide",
        slides: [
                    "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide1_2.png",
                    "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide2_2.png",
                    "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide3_2.png",
                    "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide6_2.png",
                    "https://cdn.sketchbubble.com/pub/media/catalog/product/cache/1/image/720x540/c96a280f94e22e3ee3823dd0a1a87606/s/c/scrum-process-slide7_2.png"
                ],
        extraContent: [
            {
                title: "O que é o scrum?",
                link: "https://www.atlassian.com/br/agile/scrum"
            },
            {
                title: "Scrum",
                link: "https://youtu.be/3aCww_1RnL0"
            },
            {
                title: "Scrum Guide",
                link: "https://www.scrum.org/resources/scrum-guide"
            }
        ]
    }
]

function entrarTelaCurso(courseName) {
    courseName = courseName.replaceAll(" ", "-")
    router.push({ name: `/curso-atual/${courseName}/1`, params: couseContent})
}

</script>

<template>
    <div>
        <div :id="`${props.course.title}`" class="adjust-img" @click="entrarTelaCurso(props.course.title)">
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