<script setup>
import { ref } from 'vue';

let selected = ref('Aula 1');

function print () {
    console.log("teste: " + selected.value)
}
</script>

<template>
    <div>
        <select v-model="selected" :onselect="print()">
            <option>Aula 1</option>
            <option>Aula 2</option>
            <option>Aula 3</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/global.scss';

div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
}

select {
    background-color: $dark-gray;
    font-family: Inter;
    color: antiquewhite;
    cursor: pointer;
    outline: none;
    border: none;
    width: 82%;
    height: 40px;
    padding: 10px;
    transition: 0.5s;
}

select option {
    background-color: $dark-gray;
    font-family: Inter;
    color: antiquewhite;
}

select:hover {
    background-color: grey;
}
</style>