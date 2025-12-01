<script setup lang="ts">
useHead({
    title: 'Home' //Aplicar i18n
});

import { isMobile, isDesktop } from '~/utils/responsive'

</script>
<template>

    <div class="h-dvh relative">

        <section v-if="isMobile && isTablet" class="flex flex-col gap-4 px-4 pt-5 w-full h-dvh">

            <home-card label="Home" to="/" img=""></home-card>
            <home-card label="Feed" to="/" img=""></home-card>
            <home-card label="Store" to="/" img=""></home-card>
            <home-card label="Profile" to="/" img=""></home-card>
            <home-card label="Home" to="/" img=""></home-card>
            <home-card label="Feed" to="/" img=""></home-card>
            <home-card label="Store" to="/" img=""></home-card>
            <home-card label="Profile" to="/" img=""></home-card>

        </section>

        <section v-if="isDesktop" class="px-4 pt-5 w-full h-dvh">

            <div class="flex flex-row gap-4 w-full">
                <home-card label="Home" to="/" img="" class="h-72 w-125" />
                <home-card label="Feed" to="/" img="" class="h-102 w-90" />
                <home-card label="Store" to="/" img="" class="h-150 w-72" />
            </div>
            <div class="flex flex-row gap-4 w-full">
                <home-card label="Feed" to="/" img="" class="h-102 w-72" />
                <home-card label="Home" to="/" img="" class="h-72 w-102" />
            </div>

            <home-card label="Store" to="/" img="" />
            <home-card label="Profile" to="/" img="" />

        </section>

    </div>

</template>
