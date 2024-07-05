<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useRoute } from 'vue-router';
import NavbarComponent from '../components/navBar/profileNavbar/ProfileNavbarComponent.vue';

const buttons = [
    { title: 'Meus cursos', icon: 'graduation-cap', routeName: 'Meus Cursos' },
    { title: 'Meus certificados', icon: 'scroll', routeName: 'Meus Certificados' },
    { title: 'Todos os cursos', icon: 'book', routeName: 'Todos Cursos' }
];

const route = useRoute();
const currentHeaderTitle = route.name

const certificados = [
    { title: 'Fundamentos do Scrum', img: 'https://www.inesdi.com/sites/default/files/inline-images/531x354xmetodologia,P20scrum,P202.jpg.pagespeed.ic.FVz7Rkz-by.jpg"', base64Pdf: 'data:application/pdf;base64,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PDAwNzM+IDwwMDIwPiA8MDA2MT4gPDAwNkQ+IDwwMDcwPiA8MDA2Qz4gPDAwNjU+IDwwMDc0PiA8MDA2Nz4gPDAwNEM+IDwwMDZGPiA8MDA3Nz4gPDAwNzI+IDwwMDZCPiA8MDAyRT4gXQplbmRiZnJhbmdlCmVuZGNtYXAKQ01hcE5hbWUgY3VycmVudGRpY3QgL0NNYXAgZGVmaW5lcmVzb3VyY2UgcG9wCmVuZAplbmQKCmVuZHN0cmVhbQplbmRvYmoKNiAwIG9iago8PCAvVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9TZWdvZVVJRW1vamlSZWd1bGFyCi9FbmNvZGluZyAvSWRlbnRpdHktSAovRGVzY2VuZGFudEZvbnRzIFsxOCAwIFJdCi9Ub1VuaWNvZGUgMTkgMCBSPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIApbCjUgMCBSCl0KL0NvdW50IDEKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDXQo+PgplbmRvYmoKeHJlZgowIDIxCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAwOSAwMDAwMCBuIAowMDAwMDA1NzQzIDAwMDAwIG4gCjAwMDAwMDAxNjMgMDAwMDAgbiAKMDAwMDAwMDI1OCAwMDAwMCBuIAowMDAwMDAwNjg1IDAwMDAwIG4gCjAwMDAwMDU1OTggMDAwMDAgbiAKMDAwMDAwMDI5NSAwMDAwMCBuIAowMDAwMDAwMzQ2IDAwMDAwIG4gCjAwMDAwMDA1MjEgMDAwMDAgbiAKMDAwMDAwMDM4NyAwMDAwMCBuIAowMDAwMDAwNTgzIDAwMDAwIG4gCjAwMDAwMDA5OTIgMDAwMDAgbiAKMDAwMDAwMTUyNiAwMDAwMCBuIAowMDAwMDAwODA2IDAwMDAwIG4gCjAwMDAwMDA5NzIgMDAwMDAgbiAKMDAwMDAwMTU0NiAwMDAwMCBuIAowMDAwMDAxODA2IDAwMDAwIG4gCjAwMDAwMDQ3NjEgMDAwMDAgbiAKMDAwMDAwNTA1NiAwMDAwMCBuIAowMDAwMDA0NzQwIDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMjEKL0luZm8gMSAwIFIKL1Jvb3QgMTEgMCBSCj4+CnN0YXJ0eHJlZgo1ODQxCiUlRU9GCg==' },
    // { title: 'Fundamentos do CSS', base64Pdf: ''  }
]

</script>

<template>
    <NavbarComponent :buttons="buttons" />
    <div id="page-wrap">
        <HeaderComponent :title="currentHeaderTitle"></HeaderComponent>
        <div class="container">
            <div v-for="certificado in certificados" class="box-certificado">
                <a :href="certificado.base64Pdf" download="certificado.pdf" class="box-content">
                    <img class="course-image" :src="certificado.img">
                    <div class="box-content-2">
                        <div class="flag">
                            <p>Download</p>
                            <font-awesome-icon class="icon" icon="circle-down" />
                        </div>
                    <span class="course-title">
                        <p>{{ certificado.title }}</p>
                    </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

.container {
    display: grid;
    height: 100vh;
    grid-template-columns: 400px 400px;
    grid-template-rows: 100px;
    column-gap: 40px;
    row-gap: 50px;
    padding-top: 75px;
    justify-content: center; 
}

.box-certificado {
    border: 2px solid black;
    width: 400px;
    height: 100px;
}

.flag {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-family: Inter;
    background-color: #0FA958;
    width: 115px;
    height: 25px;
    text-align: center;
    margin-left: auto;
}

.box-content {
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    color: inherit;
    text-decoration: none; 
}

.course-image {
    width: 40%;
    height: 100%;
}

.icon {
    width: 14px;
    height: 14px;
}

.box-content-2 {
    display: grid;
    grid-template-rows: 25px 75px;
    width: 100%;
}

.course-title p {
    font-family: Inter;
    font-weight: 500;
    padding-top: 20px
}

</style>