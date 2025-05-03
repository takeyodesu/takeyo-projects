<template>
  <div class="p-work l-content">
    <h1>GameColorPicker</h1>
    <p class="p-workText">
      React学習に作ってみました。<br />
      色のスライダーを操作してゲーム機の左右部分の色を変更できます。
    </p>
    <div class="p-workBlank">
      <a
        href="https://takeyodesu.github.io/color-picker-app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        サイトをみる
      </a>
    </div>
    <div class="p-workImage">
      <img :src="getImageUrl('08-01.png')" alt="" />
    </div>
    <p class="p-workText">
      色のスライダーを操作してゲーム機の左右部分の色を変更できます。<br />
      背景色も変更でき、選択された背景色と文字色のコントラストを比較して、視認性が高くなるように文字色を動的に変更します。
    </p>
    <div class="p-workImage">
      <img :src="getImageUrl('08-02.png')" alt="" />
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
