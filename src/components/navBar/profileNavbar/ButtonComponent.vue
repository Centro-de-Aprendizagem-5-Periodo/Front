<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    buttonProps: Object
})

function isSelectedButton(button) {
    const router = useRouter();
    return (button.routeName === router.currentRoute.value.name)
}

</script>

<template>
    <button :class="isSelectedButton(buttonProps) ? 'selected' : ''"
        @click="$router.push({ name: buttonProps.routeName })">
        <div style="font-size:x-large">
            <font-awesome-icon  :icon="buttonProps.icon" color="#ebe1e1" />
        </div>

        <span>
            <p>{{ buttonProps.title }}</p>
        </span>
    </button>
</template>

<style lang="scss" scoped>
@import '../../../assets/global.scss';

button {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0px;
    width: 100%;
    height: 50px;
    gap: 5px;
    text-align: start;
    background-color: transparent;
    border: none;
    transition: 0.5s;
    margin-top: 2px;
}

button:hover {
    background-color: gray;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    padding-left: 7px;
}

span {
    padding-left: 7px;
    color: white;
    font-size: 15px;
    font-family: $font-style;
    margin-top: 2px;
}

.selected {
    border: solid;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 0px;
    border-width: 8px;
    border-color: #5EAD4A;
    background-color: gray;
}
</style>