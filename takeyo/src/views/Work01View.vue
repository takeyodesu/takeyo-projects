<template>
  <div class="p-work">
    <h1>大手新聞社 WEBアプリリニューアル</h1>
    <p class="p-workText">
      常駐期間2022年2月〜<br />
      大手新聞社のリニューアル案件。
      ブラウザ上で新聞画像を検索/閲覧できるWEBアプリケーションや、
      社内管理システムなどの計9プロジェクトにUI/UXデザイナーとして参画した。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('01-01.png')" alt="" />
    </div>
    <p class="p-workText">
      設計の段階から参加し要望を聞き入れ、 競合他社/類似サービスの調査や、
      ターゲット層の利用シーンなどを考察しながら
      エンドユーザー目線での制作に心掛けた。
    </p>
    <p class="p-workText">
      その他、販促物パンフレットなどのグラフィック業務や
      フロントエンド開発にも携わった。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('01-02.png')" alt="" />
    </div>
    <h4>デザイン制作</h4>
    <p class="p-workText">
      チームで共同編集作業するにあたりガイドラインを策定した。<br />
      使用する配色や、マージン、端末の環境依存情報などをまとめ、ルールを徹底したデザインモック作成に努めた。
    </p>

    <h4>WEBアクセシビリティ</h4>
    <p class="p-workText">
      2024年4月に施行される「改正障害者差別解消法」
      のWEBアクセシビリティ義務化対応についてmiCheckerを導入し「JIS X
      8341-3:2016」規格において、AAAを達成した。
    </p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Work01Index",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>
