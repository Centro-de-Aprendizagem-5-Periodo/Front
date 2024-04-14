<script setup>
import { useRouter } from 'vue-router';
import CardComponent from './CardComponent.vue';

const router = useRouter()
const meta = router.currentRoute.value.meta
const sections = meta.sections

const props = defineProps({
    sections: Array
});

</script>
<template>
    <section v-for="(section) in props.sections || sections" id="section-container">
        <div id="section-content">
            <hr />
            <div id="content-items">
                <font-awesome-icon id="icon" icon="play" size="2x" />
                <p> {{ section.title || section }} </p>
            </div>
            <hr />
        </div>
        <!-- Nao faz parte do escopo do componente section title. Mover CardComponent para a view onde será usada-->
        <div id="cards">
            <CardComponent v-for="(course) in section.courses" id="course-card" :title="course.courseTitle" />
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import '../assets/global.scss';

p {
    font-family: $font-style;
    font-weight: bold;
}

hr {
    height: 2px;
    border: none;
    background-color: $header-light-gray;
}

#icon {
    color: $header-light-gray
}

#section-content {
    width: 75%;
    display: block;
}

#section-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

#cards {
    display: grid;
    margin-top: 20px;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;
}

#content-items {
    display: flex;
    align-items: center;
    gap: 10px
}

#course-card {
    display: block;
}

@media (max-width: 1250px) {
    #cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 25px
    }
}

@media (max-width: 800px) {
    #cards {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px
    }
}
</style>