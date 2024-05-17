<script setup>

const props = defineProps({
    title: String
});

</script>

<template>
    
    <div id="section-container">
        <div id="section-content">
            <hr />
            <div id="content-items">
                <font-awesome-icon id="icon" icon="play" size="2x" />
                <p> {{ title }} </p>
            </div>
            <hr />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

#section-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

p {
    font-family: $font-style;
    font-weight: bold;
}

hr {
    height: 2px;
    border: none;
    background-color: $header-light-gray;
}

#icon {
    color: $header-light-gray;
}

#section-content {
    width: 75%;
    display: block;
}

#content-items {
    display: flex;
    align-items: center;
    gap: 10px;
}

#course-card {
    display: block;
}

@media (max-width: 1250px) {
    #cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 25px
    }
}

@media (max-width: 800px) {
    #cards {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 20px
    }
}
</style>