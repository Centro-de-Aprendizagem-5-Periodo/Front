<script setup></script>

<template>
    <video autoplay="" muted="" loop="" id="bgVideo">
        <source src="https://www.dropbox.com/scl/fi/gk3k3qwjufl2tf68on37z/Fotos-2024-03-11-14-58-45.mp4?rlkey=oavlwzwyb923ts4n6gcd1vsa8&amp;dl=1" type="video/mp4">
    </video>
    <div  id="login">
        <form>
            <label></label>
            <input>
            <label></label>
            <input>
        </form>        
    </div>
</template>

<style lang="scss" scoped>

#login {
    position: fixed;
    border: 1px solid red;
}

#bgVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
</style>