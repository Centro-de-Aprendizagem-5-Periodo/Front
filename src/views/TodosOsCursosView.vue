<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';
import CardsSectionComponent from '../components/CardsSectionComponent.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const currentHeaderTitle = route.name

const buttons = [
	{ title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
	{ title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
	{ title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const sections = [
	{
		title: 'Cursos disponíveis',
		courses: [
			{ title: 'Fundamentos do Scrum', img: "" },
			{ title: 'Curso teste 2', img: "" },
			{ title: 'Curso teste 3', img: "" },
			{ title: 'Curso teste 4', img: "" },
			{ title: 'Curso teste 5', img: "" },
			{ title: 'Curso teste 6', img: "" },
			{ title: 'Curso teste 7', img: "" }
		]
	}
]

</script>

<template>

	<NavbarComponent :buttons="buttons" />
	<div id="page-wrap">
		<HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
		<CardsSectionComponent :sections="sections"></CardsSectionComponent>
	</div>
	
</template>