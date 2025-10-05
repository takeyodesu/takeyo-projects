<template>
  <div class="p-work l-content">
    <h1>ホロアース クリエイターツールズ</h1>
    <p class="p-workText">
      メタバースサービスのUGCサービス新規開発案件に<br />
      UIデザイナーとして参画した。(2024年3月〜)
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('06-01.png')" alt="" />
    </div>
    <p class="p-workText">
      イラスト画像を3Dアバターの服に貼り付け<br />
      オリジナルアイテムを作って販売することができる。<br />
      また販売アイテムの管理や、売上などが確認できる。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('06-02.png')" alt="" />
    </div>
    <p class="p-workText">
      類似サービスを参考にクリエイターが活躍できるツールとして制作した。<br />
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('06-03.png')" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Work05Index",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
