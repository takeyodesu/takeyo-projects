<template>
  <div class="p-about">
    <div class="p-about__inner">
      <div class="p-aboutContent">
        <div class="p-aboutContentImage">
          <img :src="getImageUrl('about-image.png')" alt="" />
        </div>
        <p class="p-aboutContentText">
        <h2>竹内</h2>
          WEBとかアプリとか作るニート<br />
          デザインとフロントエンドがんばります。<br />
          このtakeyo-projectsは、docker,nginx,vite,vue-routerを使用して作成しました。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "About",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
