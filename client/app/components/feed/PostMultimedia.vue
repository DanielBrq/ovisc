<script setup lang="ts">
const Props = defineProps<Post>();

interface Post {
    post_img: string;
    post_video_url: string;
}

const facebookVideoUrl = () => {
    return Props.post_video_url.replace('https://www.facebook.com/plugins/post.php?href=', '');
};

</script>
<template>

    <img v-if="Props.post_img && !Props.post_video_url" :src="Props.post_img" alt=""
        class="w-full aspect-video! z-1 border-none rounded-b-xl">
    <iframe v-if="Props.post_video_url && !Props.post_img" :src="Props.post_video_url"
        class="w-full aspect-video! z-1 border-none rounded-b-xl" title="url player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"></iframe>

</template>