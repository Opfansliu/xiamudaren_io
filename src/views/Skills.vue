
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      selectedKeys: ref<string[]>(['1']),
    };
  },
  
});
</script>
<template>
   <div class="skill">
    <div class="catalogs">
      <ul>
        <li>CSS布局一</li>
        <li>CSS布局二</li>
        <li>CSS布局三</li>
        <li>CSS布局四</li>
      </ul>
    </div> 
    <div class="detail">
      <ul>
        <li>CSS布局一</li>
        <li>CSS布局二</li>
        <li>CSS布局三</li>
        <li>CSS布局四</li>
      </ul>
      <div class="content">
      <h1>Css的简写属性</h1>
      <p>盒子边界 eg：border-style、margin、或者padding用1到4个值的语法表示</p>
      <p>盒子边界 eg：border-style、margin、或者padding用1到4个值的语法表示
        单值eg：border-width： 1em 表示所有的边框宽度
        双值 border-width：1em 2em，第一个值表示垂直方向的值，即top和bottom；第二个值表示水平方向的值，即left和right
         三值border-width：1em 2em 3em，第一个值表示top；第二个值表示水平方向的，即left和right；第三个值表示bottom
           四值border-width：1em 2em 3em 2em，这四个值分别表示 top、right、bottom、left</p>
      <p>属性的顺序
简写属性不视图强制它们替代属性的值的特定顺序。这适用于当这些属性使用不同类型的值时，
因为这个时候顺序并不重要。但当几个属性可以设置相同值的时候，就没有那么简单了</p>
    </div>

    </div>
    <div class="bottom">this is an eg：border-style、margin、或者padding用1到4个值的语法表示</div>
    
   </div>
  </template>
 
  <style>
  .skill {
    background-color: white;
    max-width: 90%;
    margin: 0 auto;
    height: 1200px;
  }
  .detail {
    color: black;
    border-top: 1px solid lightgray;
    padding-top: 10px;
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-gap: 20px;
  }
  .catalogs ul {
    /* margin: 20px; */
    list-style: none;
    display: flex;
    justify-content: space-between;  
  }
  ul li {
    color: black;
    background-color: rgb(243, 246, 246);
    border: 1px solid yellow;
    border-radius: 5px;
    margin: 20px;
    padding: 10px;
  }
  .detail ul{
    list-style: none;
    margin-top: 40%;

  }
  .bottom {
    position: absolute;
    bottom: 20px;
    color: rgb(114, 104, 104);
    text-align: center;
    width: 100%;
  }

 
  </style>
  