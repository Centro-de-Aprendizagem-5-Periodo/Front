<script setup>
const props = defineProps({
    materiaisComplementares: Object
})
</script>

<template>
    <div class="materia-container">
        <div class='testinho'>
            <ul v-for="(materialComplementar) in props.materiaisComplementares">
                <li> {{materialComplementar.title}}: <a href="`${materialComplementar.link}`">{{materialComplementar.link}}</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

.materia-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 30px;
}

.testinho {
    width: 80%;
    display: block;
}

ul {
    list-style-type: square;
    margin-left: 50px;
}

ul li {
  margin: 10px;
}
</style>