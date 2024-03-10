<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  components: {
    HeaderComponent
  },

  data() {
    return {
      currentHeaderTitle: this.$route.meta.headerName
    };
  }
};
</script>

<template>
    <HeaderComponent :title="this.currentHeaderTitle"></HeaderComponent>
</template>