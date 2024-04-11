<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRoute } from 'vue-router';
import NavBarComponent2 from '../components/NavBar/NavBarComponent2.vue';

const buttons = [
    { title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
    { title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
    { title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const route = useRoute();
const currentHeaderTitle = route.name

</script>
<template>
    <NavBarComponent2 :buttons="buttons" />

    <div id="page-wrap">
        <HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
    </div>
</template>
<style lang="scss" scoped></style>