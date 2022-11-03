<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'


const router = useRouter()
function goSkills() {
  console.log(router);
  router.push({name:'skills'})
}
</script>

<template>
     <div>
        <nav>
          <RouterLink to="/" />
        </nav>
        <RouterView />
    </div>
</template>

