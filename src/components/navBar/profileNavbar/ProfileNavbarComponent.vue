<script setup>
import ButtonComponent from './ButtonComponent.vue';
import ProfileComponent from './ProfileComponent.vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const props = defineProps({
	buttons: Array
});

function closeNavBar() {
	document.querySelector('#nav-bar').style.cssText = 'display: none;';
	document.querySelector('#hamburguinho').style.display = 'flex';
	document.querySelector('#page-wrap').style.paddingLeft = '0';
	store.dispatch('toggleNavbar');
}

function deslogar() {
	router.push({ path: '/' })
}

</script>

<template>
	<div id="nav-bar">
		<div id="log-out">
			<i><font-awesome-icon id="sign-out" class="icon" icon="sign-out" color="#ebe1e1" size="2x" style="width: 28px" @click="deslogar"/></i>
			<ProfileComponent ></ProfileComponent>
			<i><font-awesome-icon v-if="router.currentRoute.value.path !== '/cadastrar'"class="icon" icon="times" color="#ebe1e1" size="2x" @click="closeNavBar" style="width: 24px" /></i>
			<i v-if="router.currentRoute.value.path === '/cadastrar'" style="width: 34px" ></i>
		</div>
		<!-- TODO: dentro desse nav chamaremos nossos botões -->
		<nav class="item-list">
			<ButtonComponent v-for="button in buttons" :button-props="button" />
		</nav>
	</div>
</template>

<style scoped>
#sign-out {
	rotate: 180deg;
}

#nav-bar {
	height: 100vh;
	z-index: 1000;
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

.icon:hover {
    transform: scale(1.1);
}
</style>