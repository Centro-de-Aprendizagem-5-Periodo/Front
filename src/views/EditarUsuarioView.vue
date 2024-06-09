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

const route = useRoute();
const router = useRouter();
const currentHeaderTitle = route.name;
const store = useStore();

const name = ref(store.state.nameChanged);
const email = ref(store.state.emailChanged);
const password = ref(store.state.passwordChanged);
const cellphone = ref(store.state.cellphoneChanged);
const birthday = ref(store.state.birthdayChanged);
const identification = ref(store.state.identificationChanged);
const houseNumber = ref(store.state.houseNumberChanged);
const complement = ref(store.state.complementChanged);
const street = ref(store.state.streetChanged);
const neighborhood = ref(store.state.neighborhoodChanged);
const cep = ref(store.state.cepChanged);
const city = ref(store.state.cityChanged);
const uf = ref(store.state.ufChanged);

const estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
];

const showingPassword = ref(false);

function togglePasswordVisibility() {
	const passwordInput = document.getElementById('campo-senha');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
	showingPassword.value = !showingPassword.value;
}

function save() {
	const payload = {
		name: name.value.trim() || store.state.nameChanged,
        email: email.value.trim() || store.state.emailChanged,
        password: password.value.trim() || store.state.passwordChanged,
		cellphone: cellphone.value.trim() || store.state.cellphoneChanged,
        birthday: birthday.value.trim() || store.state.birthdayChanged,
        identification: identification.value.trim() || store.state.identificationChanged,
		houseNumber: houseNumber.value.trim() || store.state.houseNumberChanged,
		complement: complement.value.trim() || store.state.complementChanged,
        street: street.value.trim() || store.state.streetChanged,
        neighborhood: neighborhood.value.trim() || store.state.neighborhoodChanged,
        cep: cep.value.trim() || store.state.cepChanged,
        city: city.value.trim() || store.state.cityChanged,
        uf: uf.value.trim() || store.state.ufChanged,
    };

    store.dispatch('modifyUser', payload);
	router.push({ path: '/meus-cursos' });
}

</script>

<template>
	<NavbarComponent :buttons="buttons" />
	<div id="page-wrap">
		<HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
		<div id="container">
			<div id="input-login" class="inputContainer">
				<label for="campo-email">Login (Email)</label>
    			<input type="text" id="campo-email" v-model="email" maxlength = "64">
			</div>
			<div id="input-senha" class="inputContainer">
				<label for="campo-senha">Senha</label>
				<div class="insidePassword-input">
					<input type="password" id="campo-senha" v-model="password" maxlength = "32">
					<font-awesome-icon id="icon" :icon="showingPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']" @click="togglePasswordVisibility"/>
				 </div>
			</div>
			<div id="input-nome" class="inputContainer">
				<label for="campo-nome">Nome</label>
				<input type="text" id="campo-nome" v-model="name" maxlength = "20">
			</div>
			<div id="input-telefone" class="inputContainer">
				<label for="campo-telefone">Telefone</label>
				<input type="text" id="campo-telefone" v-model="cellphone" maxlength = "14">
			</div>

			<div id="data-identidadade" class="inputContainer flex">
				<div id="input-data-nascimento" class="half">
					<label for="campo-data">Data de Nascimento</label>
					<input type="date" id="campo-data" v-model="birthday">
				</div>
				<div id="input-identidade" class="half">
					<label for="campo-ident">Nº de Identificação (CPF/Identidade)</label>
					<input type="text" id="campo-ident" v-model="identification" maxlength = "18">
				</div> 
			</div>

			<div id="numeroCasa-Complemento" class="inputContainer flex">
				<div id="input-numeroCasa" class="half">
					<label for="campo-numeroCasa">Número</label>
					<input type="text" id="campo-numeroCasa" v-model="houseNumber" maxlength = "8">
				</div>
				<div id="input-complemento" class="half">
					<label for="campo-complemento">Complemento</label>
					<input type="text" id="campo-complemento" v-model="complement" maxlength = "45">
				</div>
			</div>

				<div id="input-logradouro" class="inputContainer">
					<label for="campo-logradouro">Logradouro</label>
					<input type="text" id="campo-logradouro" v-model="street" maxlength = "140">
				</div>

			<div id="bairro-cep" class="inputContainer flex">
				<div id="input-bairro" class="half">
					<label for="campo-bairro">Bairro</label>
					<input type="text" id="campo-bairro" v-model="neighborhood" maxlength = "90">
				</div>
				<div id="input-cep" class="half">
					<label for="campo-cep">CEP</label>
					<input type="text" id="campo-cep" v-model="cep" maxlength = "8">
				</div>
			</div>

			<div id="cidade-uf" class="inputContainer flex">
				<div id="cidade" class="half">
					<label for="campo-cidade">Cidade</label>
					<input type="text" id="campo-cidade"v-model="city" maxlength = "32">
				</div>
				<div id="input-uf" class="half">
					<label for="campo-uf">UF</label>
					<select id="campo-uf" v-model="uf">
						<option v-for="estado in estados" :key="estado.sigla" :value="estado.sigla">{{ estado.nome }}</option>
					</select>
				</div>
			</div>
			<button @click="save" id="salvar">SALVAR</button>
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
	width: 700px;
}

.insidePassword-input {
    position: relative;
}

.flex {
    display: flex;
    justify-content: space-between;
}

.half {
	width: calc(50% - 10px);
}

input, select {
	outline: none;
	border: 1px solid #D9D9D9;
	background-color: #e6e6e6;
	border-radius: 0%;
	height: 30px;
	width: 100%;
	margin-bottom: 5px;
	box-sizing: border-box;
	font-family: Inter;
	transition: 0.5s;
}

input:hover, select:hover {
  background-color: #D9D9D9;
  border-color: #A8A8A7;
}

input:focus, select:focus {
  background-color: #D9D9D9;
  border-color: #7299fc;
}

input[type="date"] {
  cursor: text;
}

select {
	cursor: pointer;
}

#campo-senha {
    padding-right: 30px;
}

#icon {
	color: gray;
    position: absolute;
    top: 20%;
    right: 5px;
	cursor: pointer;
}

#icon:hover {
    transform: scale(1.1);
}

#salvar {
    width: 140px;
    height: 40px;
    background-color: rgb(39, 168, 89);
    color: white;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-family: Inter;
    font-weight: bold;
	font-size: medium;
    transition: 0.5s;
}

#salvar:hover {
    transform: scale(1.1);
    background-color: rgb(39, 138, 69);
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