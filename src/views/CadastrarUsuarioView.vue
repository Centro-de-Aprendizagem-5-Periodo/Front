<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRoute } from 'vue-router';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';

const buttons = [
	{ title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
	{ title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
	{ title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const route = useRoute();
const currentHeaderTitle = route.name
</script>

<template>
	<NavbarComponent :buttons="buttons" />
	<div id="page-wrap">
		<HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
		<div id="container">
			<div id="input-login" class="inputContainer">
				<label for="campo-email">Login (Email)</label>
    			<input type="text" id="campo-email">
			</div>
			<div id="input-senha" class="inputContainer">
				<label for="campo-senha">Senha</label>
				<input type="password" id="campo-senha">
			</div>
			<div id="input-nome" class="inputContainer">
				<label for="campo-nome">Nome</label>
				<input type="text" id="campo-nome">
			</div>
			<div id="input-data-nascimento" class="inputContainer">
				<label for="campo-data">Data de Nascimento</label>
				<input type="date" id="campo-data">
			</div>
			<div id="input-identidade" class="inputContainer">
				<label for="campo-ident">Nº de Identificação</label>
				<input type="text" id="campo-ident">
			</div>

			<div id="endereco">
				<div id="input-rua" class="inputContainer">
					<label for="campo-rua">Rua</label>
					<input type="text" id="campo-rua">
				</div>
				<div id="input-bairro" class="inputContainer">
					<label for="campo-bairro">Bairro</label>
					<input type="text" id="campo-bairro">
				</div>
				<div id="input-cep" class="inputContainer">
					<label for="campo-cep">Cep</label>
					<input type="text" id="campo-cep">
				</div>
				<div input="cidade" class="inputContainer">
					<label for="campo-cidade">Cidade</label>
					<input type="text" id="campo-cidade">
				</div>
				<div id="input-uf" class="inputContainer">
					<label for="campo-uf">Uf</label>
					<input type="text" id="campo-uf">
				</div>
			</div>

		</div>
	</div>
</template>

<style lang="scss" scoped>

label {
	display: flex;
	margin-bottom: 3px;
}

.inputContainer {
	margin-bottom: 10px;
}

input {
	outline: none;
	border: 1px solid #969696;
	background-color: #D9D9D9;
	border-radius: 0%;
	height: 30px;
	width: 700px;
	margin-bottom: 5px;
}

#container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 100px;
}


</style>