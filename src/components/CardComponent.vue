<script setup>
const defaultImg = "https://cdn.discordapp.com/attachments/1223646395375030412/1225972264135294977/imagem.png?ex=662312a5&is=66109da5&hm=9505840cfec35a1149ec841f0fc759749db80f59038fdeb719f2bf6a09150ec5&"
const props = defineProps(['title', 'imgSrc'])
const imageValue = props.imgSrc
const isExistsImg = !!imageValue;
import { useRouter } from 'vue-router';

var router = useRouter()

function entrarTelaCurso() {
    router.push({ path: '/curso-atual' })
}

</script>

<template>
    <div>
        <div id="card" :class="!isExistsImg ? 'adjust-img' : ''" @click="entrarTelaCurso">
            <img :src="isExistsImg ? imageValue : defaultImg" :id="!isExistsImg ? 'defaultImg' : ''">
        </div>
        <div id="titleArea">
            <p>{{ props.title }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

img {
    width: 100%;
}

p {
    padding-left: 10px;
}

.adjust-img {
    justify-content: center;
    align-items: center;
}

#card {
    display: flex;
    border: 1px solid $gray;
    border-bottom-width: 0;
    width: 18vw;
    min-width: 220px;
    height: 180px;
    cursor: pointer;
}

#titleArea {
    display: flex;
    align-items: center;
    border: 1px solid $gray;
    border-top-width: 0;
    background-color: $light-gray;
    font-family: $font-style;
    font-weight: 600;
    width: 18vw;
    min-width: 220px;
    height: 40px;
}

#defaultImg {
    width: 128px;
    height: 128px;
}
</style>