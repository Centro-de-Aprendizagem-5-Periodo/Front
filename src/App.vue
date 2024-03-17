<script>
import NavbarComponent from './components/NavbarComponent.vue';
export default {
	components: {
		NavbarComponent,
	}
}
</script>
<template>
	<NavbarComponent></NavbarComponent>
	<menu id="page-wrap">
		<router-view class="views" />
	</menu>
</template>

<style scoped></style>
