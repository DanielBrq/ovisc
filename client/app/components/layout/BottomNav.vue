<script setup lang="ts">

interface Props {
    active?: string;
}

const props = withDefaults(defineProps<Props>(), {
    active: 'home', //Default current page
});

const emit = defineEmits<{
    (e: 'update:active', value: string): void;
}>();


</script>
<template>
    <nav class="fixed bottom-0 w-full h-16 z-50">
        <div class="w-full h-full rounded-t-lg bg-gray-800 shadow-lg relative">
            <div
                class="pointer-events-none absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent z-50">
            </div>
            <!-- Home | Feed | Store | Event | Profile -->
            <div class="flex justify-center items-center h-full w-full">

                <div :class="{ 'bg-gray-700/30': active === 'home' }"
                    class="flex flex-col bottom-nav border-r rounded-tl-md border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'home')">
                        <icon :class="{ 'text-white': active === 'home' }" class="text-gray-400" name="material-symbols:home-app-logo" size="32" />
                    </button>
                    <span :class="{ 'text-white': active === 'home' }" class="text-xs text-center -mt-1 text-nowrap text-gray-400">Home</span>
                </div>

                <div :class="{ 'bg-gray-700/30': active === 'feed' }" class="flex flex-col bottom-nav border-r border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'feed')">
                        <icon :class="{ 'text-white': active === 'feed' }" class="text-gray-400" name="material-symbols:post-outline-rounded" size="32" />
                    </button>
                    <span :class="{ 'text-white': active === 'feed' }" class="text-xs text-center -mt-1 text-nowrap text-gray-400">Feed</span>
                </div>

                <div :class="{ 'bg-gray-700/30': active === 'store' }" class="flex flex-col bottom-nav border-r border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'store')">
                        <icon :class="{ 'text-white': active === 'store' }" class="text-gray-400" name="material-symbols:store-rounded" size="32" />
                    </button>
                    <span :class="{ 'text-white': active === 'store' }" class="text-xs text-center -mt-1 text-nowrap text-gray-400">Tienda</span>
                </div>

                <div :class="{ 'bg-gray-700/30': active === 'event' }" class="flex flex-col bottom-nav border-r border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'event')">
                        <icon :class="{ 'text-white': active === 'event' }" class="text-gray-400" name="material-symbols:event-outline" size="32" />
                    </button>
                    <span :class="{ 'text-white': active === 'event' }" class="text-xs text-center -mt-1 text-nowrap text-gray-400">Calendario</span>
                </div>

                <div :class="{ 'bg-gray-700/30': active === 'profile' }" class="flex flex-col bottom-nav border-l rounded-tr-md border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'profile')">
                        <icon :class="{ 'text-white': active === 'profile' }" class="text-gray-400" name="material-symbols:supervised-user-circle" size="32" />
                    </button>
                    <span :class="{ 'text-white': active === 'profile' }" class="text-xs text-center -mt-1 text-nowrap text-gray-400">Perfil</span>
                </div>

            </div>

        </div>
    </nav>

</template>