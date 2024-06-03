<script setup>

const props = defineProps({
  title: String,
  completed: {
    type: Boolean,
    default: false,
  },
  time: {
    type: String,
    default: undefined
  }
})

</script>

<template>
    <button type="button" class="container">
      <div class="main-components">
        <div id="box-completed">
                <i v-if="props.completed">
                    <font-awesome-icon id="completed-icon" class="icon" icon="check" color="#27A859" size="2x" />
                </i>
            </div>
        <p id="title-text">{{ props.title }}</p>
      </div>

      <div v-if="time" id="time">
        <p id="time-text">{{ props.time }}</p>
      </div>
    </button>
</template>

<style lang="scss" scoped>
@import '../../../assets/global.scss';

.container {
  display: flex;
  align-items: center;
  border: none;
  background-color: rgb(63, 63, 65);
  width: 100%;
  height: 30px;
  padding: 0px 35px 0px 35px;
}

.main-components {
  display: flex;
  align-items: center;
  width: 88%;
  height: 30px;
}

#box-completed {
    display: block;
    min-width: 25px;
    min-height: 25px;
    max-width: 25px;
    max-height: 25px;
    background-color: $dark-gray;
}

#completed-icon {
    position: relative;
    bottom: 5px;
    left: 3px;
}

#time {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 20px;
    background-color: $header-light-gray;
}

#time-text {
    font-family: $font-style;
    color: black;
    font-weight: 500;
}

#title-text {
    color: #e3dada;
    font-family: $font-style;
    font-size: 15px;
    padding-left: 10px;
    width: 100%;
    text-align: start;
}
</style>