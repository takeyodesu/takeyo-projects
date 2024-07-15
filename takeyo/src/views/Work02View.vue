<template>
  <div class="p-work l-content">
    <h1>色覚異常 instagram</h1>
    <p class="p-workText">
      2019年学生時代制作課題<br />
      色覚異常を体験することができるフィルターを作成した。<br />
      instagram -> @shikikakuijou
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('02-01.png')" alt="" />
    </div>
    <p class="p-workText">
      meta社のsparkARを使用し作成。<br />
      instagram上で@shikikakuijouのアカウントをフォロー/閲覧することで
      フィルターをストーリーズで利用することができる。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('02-02.png')" alt="" />
    </div>
    <p class="p-workText">
      P型/D型/T型の色覚や、強弱の度合いも確認することができる。<br />
      フィルター5作品の他、色覚異常やユニバーサルデザインに関する投稿も作成。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('02-03.png')" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Work02Index",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
