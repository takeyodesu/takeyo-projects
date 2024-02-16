<template>
  <div class="p-work">
    <h1>動物病院移転LP</h1>
    <p class="p-workText">
      2021年作成。掲載期間は移転前後の約1〜2ヶ月。<br />
      動物病院の移転リニューアルと内覧会をお知らせするLPを作成した。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('05-01.png')" alt="" />
    </div>
    <p class="p-workText">
      デザイン作成からレスポンシブ対応コーディングまで対応した。<br />
      HTML/SCSS/JavaScriptを使用。<br />
      すぐにアクセス情報に辿り着けるよう、一定量スクロールするとページ内リンクボタンが画面固定で表示される動きを実装した。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('05-02.png')" alt="" />
    </div>
    <p class="p-workText">
      メインビジュアルには親しみや安心感を感じさせるような、
      動物とひとが触れ合っている写真などを用いてコラージュ画像を使用した。
      コンテンツ内容は、内覧会情報、移転期間の診療スケジュール、診療科目、院長挨拶、アクセス。
    </p>
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
