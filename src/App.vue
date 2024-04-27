<script setup>
</script>
<template>
	<menu>
		<router-view class="views" />
	</menu>
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
