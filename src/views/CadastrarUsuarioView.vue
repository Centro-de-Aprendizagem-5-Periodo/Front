<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRoute } from 'vue-router';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';
import Password from 'primevue/password';

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
			<div id="input-login" class="input">
				<label class="label-cadastro">Login (Email)</label class="label-cadastro">
				<input>
			</div>
			<div id="input-senha" class="input">
				<label class="label-cadastro"> Senha</label class="label-cadastro">
				<Password v-model="value" :feedback="false" />
			</div>
			<div id="input-nome" class="input">
				<label class="label-cadastro"> Nome</label class="label-cadastro">
				<input>
			</div>
			<div id="input-data-nascimento" class="input">
				<label class="label-cadastro"> Data de Nascimento</label class="label-cadastro">
				<input>
			</div>
			<div id="input-identidade" class="input">
				<label class="label-cadastro">Nº de Identificação</label class="label-cadastro">
				<input>
			</div>

			<div id="endereco">
				<div id="input-rua" class="input">
					<label class="label-cadastro">Rua</label class="label-cadastro">
					<input>
				</div>
				<div id="input-bairro" class="input">
					<label class="label-cadastro">Bairro</label class="label-cadastro">
					<input>
				</div>
				<div id="input-cep" class="input">
					<label class="label-cadastro">CEP</label class="label-cadastro">
					<input>
				</div>
				<div input="cidade" class="input">
					<label class="label-cadastro">Cidade</label class="label-cadastro">
					<input>
				</div>
				<div id="input-uf" class="input">
					<label class="label-cadastro">UF</label class="label-cadastro">
					<input>
				</div>
			</div>

		</div>
	</div>
</template>

<style lang="scss">
.label-cadastro {
	display: flex;
	font-weight: bold;
	margin-bottom: 10px;
}

#endereco {
	width: 100%;
}

input {
	width: 80%;
	margin-bottom: 10px;
	height: 20px;
	background-color: #e6e6e6;
	border: 0;
	border-radius: 2px;
}

.input {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 10px;
	width: 100%;
}

#container {
	width: 100%;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	margin-inline: 8%;
	padding-top: 20px;
}
</style>