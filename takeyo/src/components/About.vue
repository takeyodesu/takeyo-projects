<template>
    <div class="p-about">
        <div class="p-about__inner">
            <h2>about?</h2>
            <div class="p-aboutContent">
                <div class="p-aboutContentImage">
                    <img :src="getImageUrl('about-image.png')" alt="" />
                </div>
                <div class="p-aboutContentItem">
                    <p class="p-aboutContentItem__text">
                        こじゃけテキストについて説明こじゃけテキストについて説明こじゃけテキストについて説明こじゃけテキストについて説明
                    </p>
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
