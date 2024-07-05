<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';
import CardsSectionComponent from '../components/CardsSectionComponent.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const route = useRoute();
const currentHeaderTitle = route.name

const buttons = [
	{ title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
	{ title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
	{ title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const sections = ref([
	{
		title: 'Cursos disponíveis',
		courses: []
	}])

onMounted(() => {
	axios.get("http://localhost:8080/api/v1/cursos").then(response => {
		console.log(response)
		console.log(sections.value)
		const courses = response.data
		for (let index = 0; index < courses.length; index++) {
			sections.value[0].courses[index] = { 
				title: courses[index].nome,
				img: courses[index].linkImage
			}
		}
	});
})

</script>

<template>

	<NavbarComponent :buttons="buttons" />
	<div id="page-wrap">
		<HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
		<CardsSectionComponent :sections="sections"></CardsSectionComponent>
	</div>
	
</template>