<script setup lang="ts">

interface Props {
    uuid: string;
}
const props = defineProps<Props>()

const achievements = ref([
    {
        id: 1,
        achievement_code: 'persistency_1',
        achievement_title: 'Persistencia I',
        achievement_description: 'Llegar al nivel 10',
        achievement_img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration-illustration_23-2149331623.jpg?semt=ais_hybrid&w=740&q=80',
        achievement_rarity: 'common', //TODO: rarity enum
        exp_reward: 125,

    },
    {
        id: 2,
        achievement_code: 'persistency_2',
        achievement_title: 'Persistencia II',
        achievement_description: 'Llegar al nivel 20',
        achievement_img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration-illustration_23-2149331623.jpg?semt=ais_hybrid&w=740&q=80',
        achievement_rarity: 'common', //TODO: rarity enum
        exp_reward: 125,

    },
    {
        id: 3,
        achievement_code: 'persistency_3',
        achievement_title: 'Persistencia III',
        achievement_description: 'Llegar al nivel 30',
        achievement_img: 'https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration-illustration_23-2149331623.jpg?semt=ais_hybrid&w=740&q=80',
        achievement_rarity: 'common', //TODO: rarity enum
        exp_reward: 125,

    }
])

</script>
<template>
    <section>
        <div
            class="flex flex-row items-center justify-start h-40 max-h-40 w-full py-2 gap-2 overflow-x-auto no-scrollbar">

            <div v-for="achievement in achievements" :key="achievement.id"
                class="w-30 min-w-30 h-full rounded-xl border border-violet-300/40 bg-gray-900/40">
                <div class="flex flex-col h-full z-9">
                    <img :src="achievement.achievement_img" alt="TODO:skeleton" class="w-full h-full rounded-xl mask-b-from-50% mask-b-to-80%/80
                        hover:mask-b-from-20%">
                </div>
                <div class="-mt-8">
                    <p class="text-sm font-semibold text-center text-gray-300 hover:text-gray-100">{{
                        achievement.achievement_title }}
                    </p>
                </div>
            </div>

            <!-- TODO: button to achievements page -->
            <div class="flex items-center justify-center h-full aspect-square w-15 min-w-15">
                <button
                    class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-700
                     text-indigo-300/75 hover:text-indigo-300/75 transition-all border border-indigo-400/70 hover:border-indigo-400/85 hover:scale-102 cursor-pointer">
                    <Icon name="heroicons:plus-20-solid" class="w-6 h-6" />
                </button>
            </div>

        </div>
    </section>
</template>
<style>
[class*="no-scrollbar"]::-webkit-scrollbar {
    display: none;
}

[class*="no-scrollbar"] {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>