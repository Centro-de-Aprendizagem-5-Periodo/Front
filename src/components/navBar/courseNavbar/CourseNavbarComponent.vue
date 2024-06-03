<script setup>
import ProgressBarComponent from './ProgressBarComponent.vue';
import TitleNavBarComponent from './TitleComponent.vue';
import SelectComponent from './SelectComponent.vue';
import ActivityButtonComponent from './ActivityButtonComponent.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const props = defineProps({
    course: Object
});

function closeNavBar() {
    document.querySelector('#nav-bar').style.cssText = 'display: none;';
    document.querySelector('#hamburguinho').style.display = 'flex';
    document.querySelector('#page-wrap').style.paddingLeft = '0';
    store.dispatch('toggleNavbar');
}

function entrarTelaInicial() {
    router.push({ path: '/meus-cursos' })
}

</script>

<template>
    <div id="nav-bar">
        <div id="log-out">
            <i><font-awesome-icon class="icon" icon="arrow-left" color="#ebe1e1"
                    size="2x" @click="entrarTelaInicial" /></i>
            <div id="profile">
                <img id="course-img" src="https://www.kindpng.com/picc/m/53-539760_scrum-logo-hd-png-download.png">
            </div>
            <i><font-awesome-icon class="icon" icon="times" color="#ebe1e1" size="2x" @click="closeNavBar" /></i>
        </div>
        <div class="nome-curso-div">
            <p id="nome-curso">{{course.name}}</p>
        </div>
        <div id="progress-container">
            <ProgressBarComponent :percentage="`${course.progress}`"/>
        </div>
        <TitleNavBarComponent title="Aula atual" />
        <nav class="item-list">
            <SelectComponent :courseParts="`${course.parts}`"/>
        </nav>
        <TitleNavBarComponent title="Módulos" />
        <ActivityButtonComponent v-for="(module) in course.currentPart.modules" :number="`${module.number}`" :title="`${module.title}`" :time="`${module.duration}`" completed/>
    </div>
</template>

<style scoped>
@import '../../../assets//global.scss';

.nome-curso-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
}

#profile {
    display: grid;
    justify-items: center;
    text-align: center;
    margin-top: 50px;
    gap: 10px;
}

#course-img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

#progress-container {
    display: flex;
    justify-content: center;
}

p {
    font-family: Inter;
    color: #e3dada;
}

#nome-curso {
    color: #e3dada;
    font-family: Inter;
    font-size: 18px;
}

#nav-bar {
    height: 100vh;
    z-index: 1000;
    background-color: rgb(63, 63, 65);
    transition: 0.5s;
    position: fixed;
}

#log-out {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.item-list {
    width: 100%;
}

.icon {
    padding: 5px;
    cursor: pointer;
}

.icon:hover {
    transform: scale(1.1);
}
</style>