<template>
  <div class="p-work l-content">
    <h1>ホロアースWEBショップ</h1>
    <p class="p-workText">
      ホロアースアプリ内で使用可能な<br />
      アバターアイテムをWEB上で購入できるショップサイトの開発
      <br />
      一般的なファッションECサイトの設計をベースに、メタバース特有の仕様を取り入れ、直感的でスムーズな操作性を実現した。
    </p>
    <div class="p-workBlank">
      <a
        href="https://creator.holoearth.com/shop/products"
        target="_blank"
        rel="noopener noreferrer"
      >
        サイトをみる
      </a>
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('09-01.png')" alt="" />
    </div>
    <p class="p-workText">
      TypeScript /React のフロントエンド開発も一部担当した。<br />
      約3ヶ月の短い期間で開発しリリースした。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('09-02.png')" alt="" />
    </div>
    <p class="p-workText">プロモーション用バナーなども担当した。</p>
    <div class="p-workImage">
      <img :src="getImageUrl('09-03.png')" alt="" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Work09Index",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
