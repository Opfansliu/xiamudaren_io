<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import HomePage from './views/Home.vue'


const router = useRouter()
function goSkills() {
  console.log(router);
  router.push({name:'skills'})
}
</script>

<template>
     <div>
        <nav>
          <RouterLink to="/home" />
        </nav>
        <RouterView />
    </div>
</template>

