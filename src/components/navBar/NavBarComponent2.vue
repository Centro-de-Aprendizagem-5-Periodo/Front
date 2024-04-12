<script setup>
import ProgressBarComponent from './ProgressBarComponent.vue';
import TitleNavBarComponent from './TitleNavBarComponent.vue';
import SelectComponent from './SelectComponent.vue';

import { useStore } from 'vuex';
import ButtonNavCursoAtual from './ButtonNavCursoAtual.vue';

const store = useStore();

const props = defineProps({
    buttons: Array
});

function closeNavBar() {
    document.querySelector('#nav-bar').style.cssText = 'display: none;';
    document.querySelector('#hamburguinho').style.display = 'flex';
    document.querySelector('#page-wrap').style.paddingLeft = '0';
    store.dispatch('toggleNavbar');
}

import { useRouter } from 'vue-router';
import ProfileComponent2 from './ProfileComponent2.vue';
var router = useRouter()

function entrarTelaInicial() {
    router.push({ path: '/' })
}

</script>

<template>
    <div id="nav-bar">
        <div id="log-out">
            <i @click="entrarTelaInicial"><font-awesome-icon class="icon" icon="arrow-left" color="#ebe1e1" size="2x" /></i>
            <ProfileComponent2></ProfileComponent2>
            <i><font-awesome-icon class="icon" icon="times" color="#ebe1e1" size="2x" @click="closeNavBar" /></i>
        </div>
        <div class="nome-curso-div">
            <p id="nome-curso">Fundamentos do Scrum</p> <!-- TODO: passar por parametro -->
        </div>
        <ProgressBarComponent />
        <TitleNavBarComponent />
        <nav class="item-list">
            <SelectComponent />
        </nav>
        <!-- <TitleNavBarComponent /> -->
        <ButtonNavCursoAtual />
    </div>
</template>

<style scoped>
.nome-curso-div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 10px;
}

#nome-curso {
    color: #e3dada;
    font-family: Inter;
    margin-left: 4%;
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
</style>