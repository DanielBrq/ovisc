<script setup lang="ts">

interface Props {
    active?: string;
}

const props = withDefaults(defineProps<Props>(), {
    active: 'home',
});

const emit = defineEmits<{
    (e: 'update:active', value: string): void;
}>();


</script>
<template>
    <nav class="fixed bottom-0 w-full h-16 z-50">
        <div class="w-full h-full rounded-t-lg bg-gray-800 shadow-xl relative">
            <div
                class="pointer-events-none absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent z-50">
            </div>
            <!-- Home | Feed | Store | Event | Profile -->
            <div class="flex justify-center items-center h-full w-full">

                <div :class="{ 'bg-gray-700/50': active === 'home' }"
                    class="flex flex-col bottom-nav border-r rounded-tl-md border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'home')">
                        <icon name="material-symbols:home-app-logo" size="32" />
                    </button>
                    <span class="text-xs text-center -mt-1 text-nowrap">Home</span>
                </div>

                <div :class="{ 'bg-gray-700/50': active === 'feed' }" class="flex flex-col bottom-nav border-r border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'feed')">
                        <icon name="material-symbols:post-outline-rounded" size="32" />
                    </button>
                    <span class="text-xs text-center -mt-1 text-nowrap">Feed</span>
                </div>

                <div :class="{ 'bg-gray-700/50': active === 'store' }" class="flex flex-col bottom-nav border-r border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'store')">
                        <icon name="material-symbols:store-rounded" size="32" />
                    </button>
                    <span class="text-xs text-center -mt-1 text-nowrap">Tienda</span>
                </div>

                <div :class="{ 'bg-gray-700/50': active === 'event' }" class="flex flex-col bottom-nav border-r border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'event')">
                        <icon name="material-symbols:event-outline" size="32" />
                    </button>
                    <span class="text-xs text-center -mt-1 text-nowrap">Calendario</span>
                </div>

                <div :class="{ 'bg-gray-700/50': active === 'profile' }" class="flex flex-col bottom-nav border-l rounded-tr-md border-indigo-300/30">
                    <button type="button" @click="emit('update:active', 'profile')">
                        <icon name="material-symbols:supervised-user-circle" size="32" />
                    </button>
                    <span class="text-xs text-center -mt-1 text-nowrap">Perfil</span>
                </div>

            </div>
            <div
                class="pointer-events-none absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-indigo-500 to-transparent z-50">
            </div>

        </div>
    </nav>

</template>