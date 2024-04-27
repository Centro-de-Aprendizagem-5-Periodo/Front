<script setup>
import { useRouter } from 'vue-router';

var router = useRouter()

function logar() {
    router.push({ path: '/' })
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
                        <label>Login</label>
                        <input>
                    </div>
                    <div class="input-login">
                        <label>Senha</label>
                        <input>
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
    font-weight: bold
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

#entrar {
    width: 100px;
    height: 40px;
    background: #127e71;
    color: white;
    border-radius: 3px;
    border: none;
    cursor: pointer;
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