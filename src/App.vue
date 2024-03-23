<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
	components: {
		NavbarComponent,
	},
	data() {
		return {
			buttons: [
				{ nome: 'Meus cursos', icone: 'graduation-cap' },
				{ nome: 'Meus certificados', icone: 'scroll' },
				{ nome: 'Todos os cursos', icone: 'book' }
			]
		}
	}
}

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
