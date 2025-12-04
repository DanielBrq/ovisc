<script setup lang="ts">
useHead({
    title: 'Home' //Aplicar i18n
});

import { isMobile, isDesktop } from '~/utils/responsive'

</script>
<template>

    <div class="h-dvh relative">

        <div v-if="isMobile || isTablet">

            <section class="flex flex-row items-center h-40">
                <div class="flex flex-col w-full h-full">
                    <home-card label="Orders" to="/" img="" class="h-40"></home-card>
                </div>
                <div class="w-full ml-2">
                    <div class="flex flex-col gap-4">
                        <home-card label="Orders" to="/" img="" class="w-full h-10"></home-card>
                        <home-card label="Orders" to="/" img="" class="w-full h-10"></home-card>
                        <home-card label="Orders" to="/" img="" class="w-full h-10"></home-card>
                    </div>
                </div>
            </section>

        </div>

        <section v-if="isDesktop" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">


            <home-card label="Home" to="/" img=""
                class="col-span-2 row-span-2 bg-gray-800 rounded-lg overflow-hidden" />
            <home-card label=" Feed" to="/" img=""
                class="col-span-4 row-span-1 bg-gray-800 rounded-lg overflow-hidden" />
            <home-card label="Store" to="/" img=""
                class="col-span-1 row-span-1 bg-gray-700 rounded-lg overflow-hidden" />

            <home-card label="Feed" to="/" img=""
                class="col-span-1 row-span-2 bg-gray-700 rounded-lg overflow-hidden" />
            <home-card label="Home" to="/" img="" />

            <home-card label="Store" to="/" img="" />
            <home-card label="Profile" to="/" img="" />

        </section>

    </div>

</template>
