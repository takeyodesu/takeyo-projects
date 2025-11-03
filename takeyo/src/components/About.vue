<template>
  <div class="p-about">
    <div class="p-about__inner">
      <div class="p-aboutContent">
        <div class="p-aboutContentImage">
          <img :src="getImageUrl('about-image.png')" alt="" />
        </div>
        <div class="p-aboutContentText">
          <h2>竹内</h2>
          WEBとかアプリとか作るニート<br />
          デザインとフロントエンドがんばります。<br />
          このページは、vite,vue-routerを使用して作成しました。
          <div class="p-aboutContentSns">
            <div class="p-aboutContentSnsItem">
              <a
                href="https://x.com/takeyodesu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="getImageUrl('x-white.png')"
                  alt="X (旧Twitter)"
                  style="width: 24px; height: 24px"
                />
              </a>
            </div>
            <div class="p-aboutContentSnsItem">
              <a
                href="https://www.instagram.com/takeyodesu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  :src="getImageUrl('ig-white.png')"
                  alt="instagram"
                  style="width: 24px; height: 24px"
                />
              </a>
            </div>
          </div>
        </div>
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
