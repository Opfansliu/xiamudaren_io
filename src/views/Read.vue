<script setup>
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

const timeLineData = reactive({
  content:[
    {
      title: '2022',
      img: 'https://pngimg.com/uploads/ghost/ghost_PNG40.png'
    },
    {
      title: '2021',
      img: 'https://pngimg.com/uploads/ghost/ghost_PNG40.png'
    },
    {
      title: '2020',
      img: 'https://pngimg.com/uploads/ghost/ghost_PNG40.png'
    },
    {
      title: '2019',
      img: 'https://pngimg.com/uploads/ghost/ghost_PNG40.png'
    },
    {
      title: '2018',
      img: 'https://pngimg.com/uploads/ghost/ghost_PNG40.png'
    },

    {
      title: '2017',
      img: 'https://pngimg.com/uploads/ghost/ghost_PNG40.png'
    },
  ]
});


</script>

<template>
  <div>
    <a-timeline mode="alternate">
    <a-timeline-item v-for="item in timeLineData.content">
      {{item.title}}<br/>
      周五啦、啦啦啦啦～～～～～～～～～～～～～～～～～～～～20221104～～～～～～～～～～～～～～～～～～～～～～～～～～～
      <img  class="img" :src="item.img"/>
      <template #dot><ClockCircleOutlined style="font-size: 16px"/></template>
    </a-timeline-item>
  </a-timeline>

  </div>
 
</template>

<style>
.ant-timeline-item-content {
    position: relative;
    top: -7.001px;
    margin: 0 0 0 26px;
    word-break: break-word;
    color: white;
}

.ant-timeline {
    margin-top: 100px;
}
.img {
  width: 400px;
  height: 400px;
}

</style>
