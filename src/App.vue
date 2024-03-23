<script setup>
import NavbarComponent from './components/NavbarComponent.vue';

const buttons = [
	{ title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos'},
	{ title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados'},
	{ title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

</script>
<template>
	<div>
		<NavbarComponent :buttons="buttons" />
		<menu id="page-wrap">
			<router-view class="views" />
		</menu>
	</div>
</template>

<style scoped>
template {
	display: flex;
}

div {
	display: flex;
	flex-direction: row;
}

#page-wrap {
	flex-grow: 1;
}
</style>
