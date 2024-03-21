<script setup></script>

<template>
    <div id="profile">
        <img src="https://st3.depositphotos.com/1594920/18263/i/450/depositphotos_182639510-stock-photo-sphynx-hairless-cat-4-years.jpg">
        <p>
            Name
            <font-awesome-icon id="icon" :icon="['fas', 'pencil']" style="color: #ffffff;" />
        </p>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

#profile {
    display: grid;
    justify-content: center;
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
}

</style>