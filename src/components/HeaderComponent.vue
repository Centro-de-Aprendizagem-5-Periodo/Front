<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isNavbarOpen = store.getters.isNavbarOpen;
const props = defineProps(['title'])

function openNavBar() {
	document.querySelector('#nav-bar').style.cssText = 'display: block;'
	document.querySelector('#hamburguinho').style.display = 'none';
	ajustarTamanhoNavBar();
	store.dispatch('toggleNavbar');
}

onMounted(() => {
	window.addEventListener('resize', () => {
		ajustarTamanhoNavBar()
	})
});

function ajustarTamanhoNavBar() {
	let navBar = document.querySelector('#nav-bar').display === 'none'

	if (!navBar) {
		if (window.innerWidth <= 1145) {
			setPadding('98vw');
			document.querySelector('#nav-bar').style.width = '98%';
		} else {
			setPadding('20vw');
			document.querySelector('#nav-bar').style.width = '20%';
		}
	}
}

const setPadding = (paddingValue) => {
	document.querySelector('#page-wrap').style.paddingLeft = paddingValue;
};

</script>

<template>
	<header id="header-component">
		<div v-if="!isNavbarOpen" id="hamburguinho" @click="openNavBar">
			<font-awesome-icon icon="bars" size="2x" />
		</div>
		<div id="container-title">
			<p id="title">
				{{ props.title }}
			</p>
		</div>
	</header>
</template>

<style lang="scss" scoped>
@import '../assets/global.scss';

header {
	background-color: $header-light-gray;
	width: 100%;
	display: flex;
	height: 70px;
	flex: 1;
	position: relative;
	z-index: 999;
}

#container-title {
		display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}

#title {
	font-family: $font-style;
	font-weight: bold;
}

#hamburguinho {
	width: fit-content;
	padding-left: 5px;
	display: none;
	align-items: center;
}
</style>
