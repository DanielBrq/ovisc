<script setup lang="ts">

interface Props {
    uuid: string;
}
const props = defineProps<Props>()


// Stats será un componente widget que encapsulará los datos del jugador

</script>
<template>
    <section class="flex flex-col items-start gap-2 w-full">

        <div class="flex flex-row items-center justify-start gap-2">

            <user-img :uuid="props.uuid" />

            <p class="ovis-gradient-w pointer-events-none text-xl font-bold">
                Daniel Barquero Cabrera</p>

        </div>

        <div class="flex flex-row items-center justify-between px-2 sm:justify-start gap-5 w-full">
            <div class="flex flex-col items-start justify-end sm:justify-start gap-3 relative mb-6">
                <user-player-level :uuid="props.uuid" :showLabel="true" :showLevel="true" />
                <user-player-experience-bar :uuid="props.uuid" class="w-50 mt-1 absolute top-4/4 -translate-y-1/2" />
            </div>

            <div class="flex flex-col items-center justify-center">
                <user-player-achievements :uuid="props.uuid" />
            </div>

        </div>
    </section>
</template>
