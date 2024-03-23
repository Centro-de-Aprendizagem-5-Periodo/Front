<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentHeaderTitle = route.name
</script>
<template>
    <HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
</template>
<style lang="scss" scoped>
    
</style>