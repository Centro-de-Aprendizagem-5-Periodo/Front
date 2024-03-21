<template>
	<div id="nav-bar">
		<div id="log-out">
			<font-awesome-icon icon="sign-out" color="#ebe1e1" size="2x" />
			<ProfileComponent></ProfileComponent>
			<font-awesome-icon icon="times" color="#ebe1e1" size="2x" @click="closeNavBar" />
		</div>
		<!-- TODO: dentro desse nav chamaremos nossos botões -->
		<nav class="item-list">
			<slot>
				<p></p>
			</slot>
		</nav>
	</div>
</template>

<script setup>
import ProfileComponent from './ProfileComponent.vue';

function closeNavBar() {
	document.querySelector('#nav-bar').style.cssText = 'display: none;'
	document.querySelector('#hamburguinho').style.display = 'flex';
	document.querySelector('#page-wrap').style.paddingLeft = '0';
}
</script>

<style scoped>
#nav-bar {
	height: 100vh;
	z-index: 1000;
	display: none;
	width: 20%;
	background-color: rgb(63, 63, 65);
	transition: 0.5s;
	padding: 5px;
	position: fixed;
}

#log-out {
	display: flex;
	width: 100%;
	justify-content: space-between;
}
</style>