<script setup>
import ButtonComponent from './ButtonComponent.vue';
import ProfileComponent from './ProfileComponent.vue';

// TODO: jogar os botões para a MeusCursos.view e utilizar props na navbar para passar os buttons a serem renderizados

const buttons = [
	{ nome: 'Meus cursos', icone: 'graduation-cap'},
	{ nome: 'Meus certificados', icone: 'scroll'},
	{ nome: 'Todos os cursos', icone: 'book'}
]

function closeNavBar() {
	document.querySelector('#nav-bar').style.cssText = 'display: none;'
	document.querySelector('#hamburguinho').style.display = 'flex';
	document.querySelector('#page-wrap').style.paddingLeft = '0';
}
</script>

<template>
	<div id="nav-bar">
		<div id="log-out">
			<font-awesome-icon icon="sign-out" color="#ebe1e1" size="2x" />
			<ProfileComponent></ProfileComponent>
			<font-awesome-icon icon="times" color="#ebe1e1" size="2x" @click="closeNavBar" />
		</div>
		<!-- TODO: dentro desse nav chamaremos nossos botões -->
		<nav class="item-list">
			<ButtonComponent v-for="button in buttons" :button-title="button.nome" :button-icon="button.icone"></ButtonComponent>
		</nav>
	</div>
</template>

<style scoped>
#nav-bar {
	height: 100vh;
	z-index: 1000;
	display: none;
	width: 20%;
	background-color: rgb(63, 63, 65);
	transition: 0.5s;
	padding: 5px;
	position: fixed;
}

#log-out {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.item-list {
	margin-top: 40px;
	width: 100%;
	height: 200px;
}

</style>