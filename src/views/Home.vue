<script setup>
import { onMounted, reactive } from 'vue';
import http from '../utils/http'
import {Button} from 'ant-design-vue'
import {useRouter} from 'vue-router'

const randomWords = reactive({content: ''})
const router = useRouter()

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
function goSkills() {
  console.log(router);
  router.push({name:'skills'})
}
function goRead() {
  console.log('read')
  router.push({name:'read'})
}
function goLife() {
  router.push('life')
}

</script>

<template>
  <div class="bg">
    <div class="coverBg">
        <div class="greetings">
              <img src="../assets/logo.png"/>
              <h1>xiamudaren</h1>
              <h4> 保持热爱、奔赴山海 </h4>
              <div class="lineV"></div>
              <h3>{{randomWords.content}}</h3>
              <div class="profile">
                      <Button type="text"  @click="goSkills">*语言*</Button>
                      <Button type="text" @click="goRead">*读书*</Button>
                      <Button type="text" @click="goLife">*生活*</Button>
              </div>
         </div>
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
  color: rgb(216, 207, 207);
}
.lineV {
  margin-top: 40px;
  width: 40%;
  height: 1px;
  background-color: #4b464c;
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

.bg {
  width: 100vw;
  height: 100%;
  background-image: url("../assets/night01.gif");
  background-size: cover;
  background-position: center 0px;
  text-align: center;
  background-repeat:no-repeat;
  background-attachment:fixed;
}
.coverBg {
  background-color:hsla(0, 0%, 0%, 0.5) ;

}
</style>
