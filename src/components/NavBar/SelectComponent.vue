<script setup>
</script>

<template>
    <div>
        <select v-model="selected">
            <option disabled value="">Selecione</option>
            <option>Aula 1</option>
            <option>Aula 2</option>
            <option>Aula 3</option>
        </select>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 7px;
}

select {
    background-color: #242426;
    color: antiquewhite;
    border-color: black;
    width: 97%;
    height: 25px;

}
</style>
