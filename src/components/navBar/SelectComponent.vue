<script setup>
</script>

<template>
    <div>
        <select v-model="selected">
            <option value="1">Aula 1</option>
            <option value="2">Aula 2</option>
            <option value="3">Aula 3</option>
        </select>
    </div>
</template>

<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

select {
    background-color: #242426;
    color: antiquewhite;
    border-color: black;
    width: 100%;
    height: 25px;
}
</style>
