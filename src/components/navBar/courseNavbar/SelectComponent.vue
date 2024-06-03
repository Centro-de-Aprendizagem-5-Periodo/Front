<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
    courseParts: String
});

let selected = ref('1');

var router = useRouter();

async function changePage() {
    const courseUrl = router.currentRoute.value.params.nome.replaceAll(" ", "-")
    console.log("select " + `/curso/${courseUrl}/${selected.value}/1`)
    await router.push({path: `/curso/${courseUrl}/${selected.value}/1`})
}

</script>

<template>
    <div>
        <select v-model="selected" @change="changePage()">
            <option v-for="(part) in Array.from({ length: courseParts }, (value, index) => index + 1)" :value="`${part}`">Aula {{part}}</option>
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