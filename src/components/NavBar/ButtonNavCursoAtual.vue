<script setup>
</script>

<template>
    <div class="check-quadrado">
        <div class="container">
            <i style="font-size:x-large"><font-awesome-icon class="icon" icon="square-check" color="#ebe1e1" /></i>
            <p>Aula 1: Parte 1</p>
        </div>
        <div class="hora">
            <p>00.00</p>
        </div>
    </div>
</template>

<style scoped>
.check-quadrado {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    gap: 5px;
    padding-left: 7px;
}

.container {
    display: flex;
    align-items: center;
}

.hora {
    margin-left: auto;
}

p {
    color: #e3dada;
    font-family: Inter;
    padding-left: 7px;
    font-size: 18px;
}
</style>