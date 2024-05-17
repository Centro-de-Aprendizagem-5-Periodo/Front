<script setup>
import { useRouter } from 'vue-router';
var router = useRouter()

function entrarTelaInicial() {
    router.push({ path: '/' })
}
</script>
<template>
    <div class="pai-button">
        <button @click="entrarTelaInicial">
            <span>
                <p>ATIVIDADE CONCLUIDA</p>
            </span>
        </button>
    </div>
</template>
<style scoped>
div {
    display: flex;
    justify-content: end;
    align-items: end;
    padding-right: 20px;
    padding-bottom: 20px;
    border: none;
}

button {
    background-color: rgb(39, 168, 89);
    display: flex;
    justify-content: end;
    border-color: rgb(39, 168, 89);
    border: none;
    cursor: pointer;
    transition: 0.5s;
}

button:hover {
    transform: scale(1.1);
    background-color: rgb(39, 138, 69);
}

p {
    color: white;
    padding: 10px;
    font-family: Inter;
    font-weight: bold;
}
</style>