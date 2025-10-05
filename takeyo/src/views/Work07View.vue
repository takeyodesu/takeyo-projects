<template>
  <div class="p-work l-content">
    <h1>マーケットプレイスLP</h1>
    <p class="p-workText">ホロアース クリエイターサービスPR用LP<br /></p>
    <p class="p-workText">
      構成やビジュアルのディレクション、デザインまで担当した。
    </p>
    <div class="p-workBlank">
      <a
        href="https://holoearth.com/marketplace-lp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        サイトをみる
      </a>
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('07-01.png')" alt="" />
    </div>
    <p class="p-workText">
      編集ツールでよく見かけるUIパーツやオブジェクトをモチーフにすることで、制作に携わる方々にとって親しみやすく、共感を得やすいデザインを意識した。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('07-02.png')" alt="" />
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('07-03.png')" alt="" />
    </div>
    <p class="p-workText">
      クリエイターの「作りたい」、「オリジナルをみんなにお披露目したい」といった気持ちを刺激するようなワクワク期待感があるLPに仕上げた。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('07-04.png')" alt="" />
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
