<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const name = ref(store.state.nameChanged);
const router = useRouter();

</script>

<template>
    <div id="profile">
        <img
            src="https://st3.depositphotos.com/1594920/18263/i/450/depositphotos_182639510-stock-photo-sphynx-hairless-cat-4-years.jpg">
        <p>
            {{ name }}
            <font-awesome-icon id="icon" :icon="['fas', 'pencil']" style="color: #ffffff;" @click="router.push({ path: '/editar' })" />
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../assets//global.scss';

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

#icon:hover {
    transform: scale(1.1);
}
</style>