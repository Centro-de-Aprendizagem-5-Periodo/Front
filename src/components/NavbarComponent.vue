<script setup>
import ButtonComponent from './ButtonComponent.vue';
import ProfileComponent from './ProfileComponent.vue';
import { useStore } from 'vuex';

const store = useStore();
const props = defineProps({
	buttons: Array
});

function closeNavBar() {
	document.querySelector('#nav-bar').style.cssText = 'display: none;'
	document.querySelector('#hamburguinho').style.display = 'flex';
	document.querySelector('#page-wrap').style.paddingLeft = '0';
	store.dispatch('toggleNavbar');
}
</script>

<template>
	<div id="nav-bar">
		<div id="log-out">
			<i><font-awesome-icon class="icon" icon="sign-out" color="#ebe1e1" size="2x" /></i>
			<ProfileComponent></ProfileComponent>
			<i><font-awesome-icon class="icon" icon="times" color="#ebe1e1" size="2x" @click="closeNavBar" /></i>
		</div>
		<!-- TODO: dentro desse nav chamaremos nossos botões -->
		<nav class="item-list">
			<ButtonComponent v-for="button in buttons" :button-props="button"/>
		</nav>
	</div>
</template>

<style scoped>
#nav-bar {
	height: 100vh;
	z-index: 1000;
	display: none;
	width: 20%;
	background-color: rgb(63, 63, 65);
	transition: 0.5s;
	position: fixed;
}

#log-out {
	display: flex;
	width: 100%;
	justify-content: space-between;
}

.item-list {
	margin-top: 40px;
	width: 100%;
	height: 200px;
}

.icon {
	padding: 5px;
	cursor: pointer;
}

</style>