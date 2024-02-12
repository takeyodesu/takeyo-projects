<template>
    <section>
        <h2>works</h2>
        <div class="p-list">
            <RouterLink to="/work01">
                <ListItem
                    :image="getImageUrl('01-01.png')"
                    title="新聞社案件"
                ></ListItem
            ></RouterLink>
            <RouterLink to="/work02">
                <ListItem
                    :image="getImageUrl('02-01.png')"
                    title="色覚異常"
                ></ListItem>
            </RouterLink>
            <RouterLink to="/work03">
                <ListItem
                    :image="getImageUrl('03-01.png')"
                    title="映画ポスター"
                ></ListItem>
            </RouterLink>
            <RouterLink to="/work04">
                <ListItem
                    :image="getImageUrl('04-01.png')"
                    title="グラフィック"
                ></ListItem>
            </RouterLink>
        </div>
        <About></About>
    </section>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import ListItem from "../components/ListItem.vue";
import About from "../components/About.vue";

import { ref, computed } from "vue";
export default {
    name: "TopIndex",
    components: {
        ListItem,
        About,
    },
    computed: {
        getImageUrl: () => {
            return (name) => {
                return new URL(`../images/${name}`, import.meta.url).href;
            };
        },
    },
};
</script>
