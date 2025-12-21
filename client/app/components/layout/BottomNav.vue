<script setup lang="ts">
import { getBottomNavItems, type NavItem } from '~/shared';

const { User } = useAuth(); //Temporal harcoded auth

const menuItems = computed(() => getBottomNavItems(User.value.uuid));

const route = useRoute();

const isActive = (item: NavItem) => {
    if (item.key === 'home') {
        return route.path === item.to;
    }
    return route.path.startsWith(item.to);
};

</script>
<template>
    <nav class="fixed bottom-0 w-full h-16 z-50">
        <div class="w-full h-full rounded-t-lg bg-gray-800 shadow-lg relative">
            <div
                class="pointer-events-none absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent z-50">
            </div>

            <div class="flex justify-center items-center h-full w-full">

                <NuxtLink v-for="(item, index) in menuItems" :key="item.key" :to="item.to" :class="[
                    { 'bg-gray-700/30': isActive(item) },
                    index === 0 ? 'rounded-tl-md' : '',
                    index === menuItems.length - 1 ? 'rounded-tr-md border-l' : 'border-r',
                    'border-indigo-300/30'
                ]"
                    class="flex flex-col w-full h-full justify-center items-center cursor-pointer !active:scale-100 !active:transform-none">

                    <icon :class="{ 'text-white': isActive(item) }" class="text-gray-400" :name="item.icon" size="32" />
                    <span :class="{ 'text-white': isActive(item) }"
                        class="text-xs text-center text-nowrap text-gray-400 pointer-events-none">
                        {{ item.label }}
                    </span>
                </NuxtLink>

            </div>

        </div>
    </nav>

</template>