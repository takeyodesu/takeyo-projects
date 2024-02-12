<template>
  <div class="p-work">
    <h1>映画ポスター</h1>
    <p class="p-workText">
      2019年制作物 二人体制の共同作品<br />
      早稲田大学人間科学部道岡円香さんとのコラボ作品として映画「めぐみ」のポスター制作。<br />
      ぴあフィルムフェスティバルにて掲載された。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('03-01.png')" alt="" />
    </div>
    <p class="p-workText">
      美術大学を目指し絵画の練習をする主人公のように実際にキャンバス地の布に<br />
      アクリル絵の具を溜まりを撮影し、デザインを作成。<br />
      17歳の多感な時期の迷いや両親の離婚と再婚、様々な感情を混沌とした配色、塗り方で表現した。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('03-02.png')" alt="" />
    </div>
    <p class="p-workText">
      “映画の新しい才能の発見と育成”をテーマとした若手クリエイターの作品を上映する映画祭。<br />
      2019年、国立映画アーカイブにて開催され、ポスターが朝日新聞、会場に掲載された。<br />
      学生時代のゼミナールの活動の一部としてぴあの方を通して本プロジェクトに参加させて頂きました。
    </p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  name: "Work03Index",
  computed: {
    getImageUrl: () => {
      return (name) => {
        return new URL(`../images/${name}`, import.meta.url).href;
      };
    },
  },
};
</script>