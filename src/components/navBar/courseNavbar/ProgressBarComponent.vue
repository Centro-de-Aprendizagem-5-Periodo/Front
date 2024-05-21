<script setup>
var progress = 100;
</script>

<template>
    <div class="progress-bar">
        <div class="main">
            <div class="progress">
                <span>{{ progress }}%</span>
            </div>
            <div class="shell">
                <div class="bar" :style="{ width: progress + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../../assets//global.scss';

.progress-bar {
    width: 82%;
}

.bar {
    background: linear-gradient(to right, #7fd569, #9cdb8c);
    height: 10px;
    width: 15px;
    border-radius: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.shell {
    height: 10px;
    width: 100%;
    border: 1px solid #242426;
    border-radius: 2px;
    padding: 3px;
    background-color: #242426;
}

.progress {
    border: 1px solid #242426;
    border-radius: 2px;
    height: 82%;
    width: 20%;
    margin-right: 5px;
    background-color: #242426;
    align-items: center;
    justify-content: center;
    display: flex;

    span {
        float: right;
        padding: 4px 5px;
        color: #e3dada;
        font-size: 12px;
        font-family: $font-style;
        text-align: center;
    }
}

.main {
    display: flex;
    height: 20px;
    width: 98%;
    border: 1px solid #37373b;
    border-radius: 2px;
    padding: 3px;
    align-items: center;
    background-color: #37373b;
    align-items: center;
    justify-content: center;
}
</style>