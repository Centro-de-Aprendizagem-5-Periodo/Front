<script setup>
</script>

<template>
    <div class="check-quadrado">
        <div class="container">
            <i style="font-size:x-large"><font-awesome-icon class="icon" icon="square-check" color="#ebe1e1" /></i>
            <p>Aula 1: Processos</p>
            <div class="hora">
                <p>02:30</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.check-quadrado {
    gap: 5px;
    padding: 10px;
}

.container {
    display: flex;
    align-items: center;
}

.icon {
    margin-right: 7px;
}

.hora {
    border: 1px solid black;
    margin-left: 30%;
    align-items: center;
    float: right;
    background-color: #bcb7b7;
}

.hora p {
    font-size: 13px;
    color: #000;
    padding: 2px;
}

p {
    color: #e3dada;
    font-family: Inter;
    font-size: 15px;
}
</style>