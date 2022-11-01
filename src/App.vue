<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/home.vue'
</script>

<template>
    <div>
      <HomePage msg="xiamudaren"/>
    </div>
</template>

<style scoped>
div {
width: 100vw;
height: 100vh;
background-image: url("./assets/night01.gif");
background-size: cover;
background-position: center 0px;
text-align: center;
background-repeat:no-repeat;
background-attachment:fixed;

}

</style>
