<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute,useRouter } from 'vue-router';

const buttons = [
	{ title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
	{ title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
	{ title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const store = useStore();
const name = ref(store.state.nameChanged);
const email = ref(store.state.emailChanged);
const password = ref(store.state.passwordChanged);
const cellphone = ref(store.state.cellphoneChanged);
const birthday = ref(store.state.birthdayChanged);
const identification = ref(store.state.identificationChanged);
const street = ref(store.state.streetChanged);
const neighborhood = ref(store.state.neighborhoodChanged);
const cep = ref(store.state.cepChanged);
const city = ref(store.state.cityChanged);
const uf = ref(store.state.ufChanged);

const route = useRoute();
const router = useRouter();
const currentHeaderTitle = route.name

function salvar() {
	if (name.value !== store.state.nameChanged && name.value.trim() !== '') {
        store.dispatch('modifyName', name.value.trim());
    }
	
	const payload = {
        email: email.value.trim() || store.state.emailChanged,
        password: password.value.trim() || store.state.passwordChanged,
		cellphone: cellphone.value.trim() || store.state.cellphoneChanged,
        birthday: birthday.value.trim() || store.state.birthdayChanged,
        identification: identification.value.trim() || store.state.identificationChanged,
        street: street.value.trim() || store.state.streetChanged,
        neighborhood: neighborhood.value.trim() || store.state.neighborhoodChanged,
        cep: cep.value.trim() || store.state.cepChanged,
        city: city.value.trim() || store.state.cityChanged,
        uf: uf.value.trim() || store.state.ufChanged,
    };

    store.dispatch('modifyUser', payload);
	router.push({ path: '/' });
}

</script>

<template>
	<NavbarComponent :buttons="buttons" />
	<div id="page-wrap">
		<HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
		<div id="container">
			<div id="input-login" class="inputContainer">
				<label for="campo-email">Login (Email)</label>
    			<input type="text" id="campo-email" v-model="email">
			</div>
			<div id="input-senha" class="inputContainer">
				<label for="campo-senha">Senha</label>
				<input type="password" id="campo-senha" v-model="password">
			</div>
			<div id="input-nome" class="inputContainer">
				<label for="campo-nome">Nome</label>
				<input type="text" id="campo-nome" v-model="name">
			</div>
			<div id="input-telefone" class="inputContainer">
				<label for="campo-telefone">Telefone</label>
				<input type="text" id="campo-telefone" v-model="cellphone">
			</div>
			<div id="input-data-nascimento" class="inputContainer">
				<label for="campo-data">Data de Nascimento</label>
				<input type="date" id="campo-data" v-model="birthday">
			</div>
			<div id="input-identidade" class="inputContainer">
				<label for="campo-ident">Nº de Identificação</label>
				<input type="text" id="campo-ident" v-model="identification">
			</div> 

			<div id="endereco">
				<div id="input-logradouro" class="inputContainer">
					<label for="campo-logradouro">Logradouro</label>
					<input type="text" id="campo-logradouro" v-model="street">
				</div>
				<div id="input-bairro" class="inputContainer">
					<label for="campo-bairro">Bairro</label>
					<input type="text" id="campo-bairro" v-model="neighborhood">
				</div>
				<div id="input-cep" class="inputContainer">
					<label for="campo-cep">CEP</label>
					<input type="text" id="campo-cep" v-model="cep">
				</div>
				<div id="cidade" class="inputContainer">
					<label for="campo-cidade">Cidade</label>
					<input type="text" id="campo-cidade"v-model="city">
				</div>
				<div id="input-uf" class="inputContainer">
					<label for="campo-uf">UF</label>
					<input type="text" id="campo-uf" v-model="uf">
				</div>
			</div>
			<button @click="salvar" id="finalizar">FINALIZAR EDIÇÃO</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>

label {
	display: flex;
	margin-bottom: 3px;
	font-family: Inter;
	font-weight: bold;
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

#finalizar {
    width: 150px;
    height: 40px;
    background: #127e71;
    color: white;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-family: Inter;
    font-weight: bold;
    transition: 0.5s;
}

#finalizar:hover {
    transform: scale(1.1);
    background-color: #096a67;
}


#container {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 75px;
	padding-bottom: 20px;
}
</style>