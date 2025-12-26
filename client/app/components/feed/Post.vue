<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';
import PostMultimedia from './PostMultimedia.vue';
import { Provider } from '@/shared';

const { User } = useAuth();

// TODO: Replace with actual post data
const Post = [
    {
        post_id: 1,
        created_by_user: User.value.name,
        post_body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus atque sed molestias quae nulla, minima neque architecto assumenda exercitationem voluptates, eos nostrum pariatur numquam placeat libero perferendis voluptate ut?',
        post_img: '',
        post_video_url: 'https://www.youtube.com/embed/em3RbuO0moI',
        provider: Provider.YOUTUBE,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        post_id: 2,
        created_by_user: User.value.name,
        post_body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus atque sed molestias quae nulla, minima neque architecto assumenda exercitationem voluptates, eos nostrum pariatur numquam placeat libero perferendis voluptate ut?',
        post_img: '',
        post_video_url: 'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FMinisteriosEnContacto%2Fposts%2Fpfbid0oXipXjCAw767zmLbFncjQTwTuF9PrGMeKTNrA3iZLL6pypVjgzvYQiu45SkqKaiyl&show_text=true&width=500',
        provider: Provider.FACEBOOK,
        created_at: new Date(),
        updated_at: new Date(),
    },
    {
        post_id: 3,
        created_by_user: User.value.name,
        post_body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus atque sed molestias quae nulla, minima neque architecto assumenda exercitationem voluptates, eos nostrum pariatur numquam placeat libero perferendis voluptate ut?',
        post_img: '',
        post_video_url: 'https://www.youtube.com/embed/em3RbuO0moI',
        provider: Provider.YOUTUBE,
        created_at: new Date(),
        updated_at: new Date(),
    }
]

</script>
<template>

    <section class="flex flex-col min-h-100dvh gap-2 pb-17 md:pb-4">

        <article v-for="post in Post" :key="post.post_id"
            class="flex flex-col min-h-50 sm:h-1/2 border border-indigo-500/70 rounded-xl z-10!">
            <div class="p-2 bg-indigo-400/10">
                <div class="flex flex-row justify-start">
                    <!-- TODO: Replace mock img -> to autor img from API-->
                    <user-img :image="User.image" size="small" :name="User.name" />
                    <div class="flex flex-col ml-2">
                        <p class="text-sm self-start text-gray-200">{{ post.created_by_user }}</p>
                        <p class="text-xs self-start text-gray-300">{{ post.created_at.toLocaleDateString() }}</p>
                    </div>
                </div>
                <div class="border-b border-indigo-600/50 my-1" />
                <div class="mb-1">
                    <p class="text-sm text-gray-200">{{ post.post_body }}</p>
                </div>
            </div>
            <PostMultimedia :post_img="post.post_img" :post_video_url="post.post_video_url" />
        </article>

    </section>

</template>