<script>
import NavbarComponent from './components/NavbarComponent.vue';

export default {
	components: {
		NavbarComponent,
	}
}
</script>
<template>
	<div>
		<NavbarComponent />
		<menu id="page-wrap">
			<router-view class="views" />
		</menu>
	</div>
</template>

<style scoped>
template {
	display: flex;
}

div {
	display: flex;
	flex-direction: row;
}

#page-wrap {
	flex-grow: 1;
}
</style>
