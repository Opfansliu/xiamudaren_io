<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <img src="../assets/logo.png"/>
    <h1>{{ msg }}</h1>
    <h3> 保持热爱、奔赴山海 </h3>

  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: 6px;
  font: italic 2em Georgia, serif;
  color: white
}
img {
  width: 100px;
  height: 100px;
}

h3 {
  top: 18px;
  font-size: 1.2rem;
  width: 100%;
  font-family: "Arial", "Microsoft YaHei", "宋体";

}

.greetings {
  top: 40%;
 /* margin: 0 auto; */

  /* position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  bottom: 0;
  transform: translate(-50%, -50%);
  text-align: center; */
}
</style>
