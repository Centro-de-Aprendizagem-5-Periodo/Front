<script setup>
import SectionTitleComponent from '../../components/SectionTitleComponent.vue';

const props = defineProps({
    materiaisComplementares: Object
})
</script>

<template>
    <SectionTitleComponent :title="'Materiais complementares:'" />
    <div class="material-container">
        <div class='content'>
            <ul v-for="(materialComplementar) in props.materiaisComplementares">
                <li> {{materialComplementar.title}}: <a v-bind:href="`${materialComplementar.link}`">{{materialComplementar.link}}</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

.material-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-left: 30px;
}

.content {
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