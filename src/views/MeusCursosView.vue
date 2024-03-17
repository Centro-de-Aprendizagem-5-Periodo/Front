<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import NavbarComponent from '../components/NavbarComponent.vue';

export default {
  components: {
    HeaderComponent,
    NavbarComponent
  },

  data() {
    return {
      currentHeaderTitle: this.$route.meta.headerName
    };
  }
};
</script>

<template>
    <NavbarComponent></NavbarComponent>
    <HeaderComponent :title="this.currentHeaderTitle"></HeaderComponent>
</template>