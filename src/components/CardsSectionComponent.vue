<script setup>
import SectionTitleComponent from './SectionTitleComponent.vue';
import CardComponent from './CardComponent.vue';

const props = defineProps({
    sections: Array
});

</script>

<template>

    <div v-for="(section) in props.sections">
        <SectionTitleComponent :title="section.title"></SectionTitleComponent>
        <div id="cards-container">
            <div id="cards">
                <CardComponent v-for="(course) in section.courses" id="course-card" :course="course" />
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

#cards-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

#cards {
  display: grid;
  margin-top: 20px;
  margin-bottom: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  width: 70%;
  grid-gap: 25px;
}
</style>