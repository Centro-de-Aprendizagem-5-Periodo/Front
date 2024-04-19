<script setup>
const props = defineProps(['title']);
</script>

<template>
    <div class="check-quadrado">
        <div class="container">
            <div id="box-completed"></div>
            <p>{{ props.title }}</p>
            <!-- <div class="hora">
                <p>02:30</p>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../assets/global.scss';

#box-completed {
    width: 25px;
    height: 25px;
    background-color: $dark-gray;
}

.check-quadrado {
    gap: 5px;
    padding: 10px 35px 10px 35px;
}

.container {
    display: flex;
    align-items: center;
}

.hora {
    border: 1px solid black;
    margin-left: 30%;
    align-items: center;
    float: right;
    background-color: #bcb7b7;
}

.hora p {
    font-size: 13px;
    color: #000;
}

p {
    padding-left: 10px;
    color: #e3dada;
    font-family: $font-style;
    font-size: 15px;
}

</style>