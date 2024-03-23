<script setup>
const props = defineProps(['buttonTitle', 'buttonIcon'])
</script>

<template>
    <button>
        <div>
            <font-awesome-icon :icon="props.buttonIcon" color="#ebe1e1" size="2x"/>
        </div>
        
        <span>
            <p>{{ props.buttonTitle }}</p>
        </span>
    </button>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

button {
    display: flex;
    align-items: center;
	border: none;
    cursor: pointer;
    margin-left: 15px;
	width: 100%;
	height: 50px;
    gap: 5px;
    background-color: Transparent;
    text-align: start;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
}

span {
    padding-left: 7px;
    color: white;
    font-size: 20px;
    font-family: $font-style;
}

</style>