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
        <img src="https://st3.depositphotos.com/1594920/18263/i/450/depositphotos_182639510-stock-photo-sphynx-hairless-cat-4-years.jpg">
        <p v-if="!editingName">
           {{ name }}
            <font-awesome-icon id="icon" :icon="['fas', 'pencil']" style="color: #ffffff;" @click="toggleEdit"/>
        </p>
        <input v-else v-model="newName" @keyup.enter="handleEnter">
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

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
    color: white;
}

#icon {
    padding-left: 4px;
    cursor: pointer;
}

input {
    font-family: $font-style;
    color: white;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    width: 125px;
    text-align: center;
    outline: none;
}

</style>