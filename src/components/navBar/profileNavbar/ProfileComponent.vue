<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const name = ref(store.state.nameChanged);
const profilePic = ref(store.state.profilePicChanged);
const router = useRouter();
const fileInput = ref(null);

function uploadImage(e) {
    fileInput.value.click();

    const image = e.target.files[0];
    if (!image.type.match("image/*")) {
        alert('Formato Inválido');
        return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (e) => {
        profilePic.value = e.target.result;
        store.commit('modifyProfilePic', e.target.result);
    };
}

</script>

<template>
    <div id="profile">
        <div id="container-picture">
            <img :src="profilePic">
            <div  v-if="router.currentRoute.value.path == '/editar'" class="camera-container" @click="uploadImage">
                <font-awesome-icon id="camera-icon" :icon="['fas', 'camera']" />
            </div>
            <input type="file" accept="image/*" @change="uploadImage" ref="fileInput">
        </div>
        <p>
            {{ name }}
            <font-awesome-icon v-if="router.currentRoute.value.path !== '/editar'" id="pencil-icon" :icon="['fas', 'pencil']" style="color: #ffffff;" @click="router.push({ path: '/editar' })" />
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

input {
    display: none;
}

p {
    font-family: $font-style;
    color: #e3dada;
}

#container-picture {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.camera-container {
    position: absolute;
    display: flex;
    width: 40px;
    height: 40px;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: $white;
    cursor: pointer;
}

#camera-icon {
    font-size: 30px;
    color: grey;
}
.camera-container:hover {
    transform: scale(1.1);
}

#pencil-icon {
    padding-left: 4px;
    cursor: pointer;
}

#pencil-icon:hover {
    transform: scale(1.1);
}
</style>