<script setup>
import { onMounted, reactive } from 'vue';
import http from '../utils/http'
import {Button} from 'ant-design-vue'

defineProps({
  msg: {
    type: String,
    required: true
  },
})
const randomWords = reactive({content: ''})
onMounted (() => {
  console.log(`the comoponent is now mounted`)
  getOneLine()
})

function getOneLine() {
  http.get('').then((response) => {
    // console.log(response)
   
    randomWords.content = response['hitokoto']
    console.log( randomWords.content);
  }).catch(error => {
    // console.log(error)
  })
}

</script>

<template>
  <div class="greetings">
    <img src="../assets/logo.png"/>
    <h1>{{ msg }}</h1>
    <h4> 保持热爱、奔赴山海 </h4>
    <div class="lineV"></div>
    <h3>{{randomWords.content}}</h3>
    <div class="profile">
      <Button type="text">*语言*</Button>
      <Button type="text">*读书*</Button>
      <Button type="text">*生活*</Button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 1.3rem;
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
  font-size: 0.8rem;
  width: 100%;
  font-family: "Arial", "Microsoft YaHei", "宋体";
  color: rgb(215, 201, 163);
}

h4 {
  top: 18px;
  color: gray;
}
.lineV {
  margin-top: 40px;
  width: 40%;
  height: 1px;
  background-color: rgb(103, 99, 99);
  margin-left: 30%;
}
.greetings {
  padding: 350px;
  justify-content: center;
}
.profile {
  margin-top: 60px;
  margin-left: 30%;
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: space-around;
}
.profile button {
  width: 100px;
  height: 40px;
  color: beige;
}
</style>
