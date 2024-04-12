<script setup>
var progress = 80;
</script>

<template>
    <div class="progress-bar">
        <div class="main">
            <div class="progress">
                <span>{{ progress }}%</span>
            </div>
            <div class="shell">
                <div class="bar" :style="{ width: progress + '%' }" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.progress-bar {
    display: flex;
    align-items: center;
    justify-content: center;
}

.bar {
    background: linear-gradient(to right, #7fd569, #9cdb8c);
    height: 10px;
    width: 15px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.shell {
    height: 10px;
    width: 90%;
    border: 1px solid #242426;
    border-radius: 13px;
    padding: 3px;
    margin: 5px;
    background-color: #242426;
}

.progress {
    border: 1px solid #242426;
    border-radius: 13px;
    height: 70%;
    width: 20%;
    background-color: #242426;
    align-items: center;
    justify-content: center;
    display: flex;

    span {
        float: right;
        padding: 4px 5px;
        color: #e3dada;
        font-size: 15px;
    }

}

.main {
    display: flex;
    height: 20px;
    width: 95%;
    border: 1px solid #37373b;
    border-radius: 13px;
    padding: 3px;
    margin: 5px;
    align-items: center;
    background-color: #37373b;
    align-items: center;
    justify-content: center;
}
</style>