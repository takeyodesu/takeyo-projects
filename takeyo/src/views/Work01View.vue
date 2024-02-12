<template>
    <div class="p-work">
        <h1>大手新聞社 WEBアプリリニューアル</h1>
        <div class="p-workImage">
            <img :src="getImageUrl('01-01.png')" alt="" />
        </div>
        <p class="p-workText">
            常駐期間:2022年2月〜<br />
            大手新聞社のリニューアル案件。
            ブラウザ上で新聞を検索/閲覧できるWEBアプリケーションや、
            社内管理システムなどの計9プロジェクトにUI/UXデザイナーとして参画した。
        </p>
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
        <p class="p-workText">テキスト</p>
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
