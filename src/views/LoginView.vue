<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

var router = useRouter();
const store = useStore();
const email = ref('');
const password = ref('');
const showingPassword = ref(false);

function togglePasswordVisibility() {
	const passwordInput = document.getElementById('senha');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
	showingPassword.value = !showingPassword.value;
}

function logar() {
    if (email.value.trim() === store.state.emailChanged && password.value.trim() === store.state.passwordChanged) {
        router.push({ path: '/' });
    } else {
        alert('Login ou senha incorretos!');
    }
}

</script>

<template>
    <div id="background">
        <div id="container">
            <div id="container-form">
                <img id="logo-unifeso" src="https://www.unifeso.edu.br/images/logo/UNIFESO.png">

                <div id="container-form-input">
                    <p>Faça agora seu login</p>

                    <div class="input-login">
                        <label for="login">Login (Email)</label>
                        <input type="text" id="login" v-model="email" maxlength = "64">
                    </div>
                    <div class="input-login">
                        <label for="senha">Senha</label>
                        <div id="container-password">
                            <input type="password" id="senha" v-model="password" maxlength = "32">
                            <font-awesome-icon id="icon" :icon="showingPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']" @click="togglePasswordVisibility"/>
                        </div>
                    </div>
                </div>
                <button @click="logar" id="entrar">ENTRAR</button>

            </div>
            <div id="container-imagem-login">
                <img id="imagem-login"
                    src="https://static.vecteezy.com/system/resources/previews/019/875/708/non_2x/hands-typing-using-a-laptop-with-a-cup-of-coffee-illustration-looks-from-the-top-of-the-hand-typing-using-a-laptop-free-png.png" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

p,
label {
    font-family: Inter;
    font-weight: bold;
}

p {
    font-size: x-large;
}

input {
    width: 100%;
}

#imagem-login {
    max-width: 92%;
    padding-left: 5%;
}

.input-login {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#container-password {
    position: relative;
}

#icon {
	color: gray;
    position: absolute;
    top: 13%;
    right: 0.1px;
	cursor: pointer;
}

#icon:hover {
    transform: scale(1.1);
}

#entrar {
    width: 100px;
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

#entrar:hover {
    transform: scale(1.1);
    background-color: #096a67;
}

#container-form-input {
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

}

#container-form {
    width: 790px;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    float: left;
}

#container {
    background: white;
    display: flex;
    width: 97vw;
    height: 97vh;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

#background {
    background-image: linear-gradient(#3f3f41, #5ead4a);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}

#logo-unifeso {
    width: 220px !important;
}
</style>