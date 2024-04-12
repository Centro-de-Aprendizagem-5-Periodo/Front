<script setup>
import { ref } from 'vue';

const editingName = ref(false);
const name = ref('Nome');
const newName = ref('');

function toggleEdit() {
    editingName.value = !editingName.value;
    if (!editingName.value) {
        name.value = newName.value;
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        toggleEdit();
    }
}
</script>

<template>
    <div id="profile">
        <img
            src="https://www.kindpng.com/picc/m/53-539760_scrum-logo-hd-png-download.png">
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets//global.scss';

#profile {
    display: grid;
    justify-items: center;
    text-align: center;
    margin-top: 50px;
    gap: 10px;
}

img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
}

p {
    font-family: $font-style;
    color: #e3dada;
}

#icon {
    padding-left: 4px;
    cursor: pointer;
}

input {
    font-family: $font-style;
    color: #e3dada;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e3dada;
    width: 125px;
    text-align: center;
    outline: none;
}
</style>