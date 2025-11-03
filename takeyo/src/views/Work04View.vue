<template>
  <div class="p-work l-content">
    <h1>グラフィック</h1>
    <p class="p-workText">バナー、ロゴ、印刷物などのグラフィック制作</p>
    <div class="p-workImage">
      <img :src="getImageUrl('04-09.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-10.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-11.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-12.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-13.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-01.png')" alt="" />
    </div>
    <p class="p-workText">たまにイラストもかいてます</p>
    <div class="p-workImage">
      <img :src="getImageUrl('04-05.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-06.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-07.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('04-08.png')" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Work04Index",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
