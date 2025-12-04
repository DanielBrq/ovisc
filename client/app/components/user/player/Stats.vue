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

            <div class="">
                <user-player-img :uuid="props.uuid" />
            </div>

            <div>
                <h4 class="ovis-gradient-w">
                    Daniel
                    Barquero Cabrera</h4>
            </div>

        </div>

        <div class="flex flex-row items-end justify-start sm:justify-start gap-3 w-full relative mb-5">
            <user-player-level :uuid="props.uuid" :showLabel="true" :showLevel="true" />
            <user-player-experience-bar :uuid="props.uuid" class="w-50 mt-1 absolute top-4/4 -translate-y-1/2" />
        </div>

        <div class="flex flex-row items-center justify-start gap-2 pointer-events-none">
            <icon name="bx:trophy" size="32" class="" />
            <span>12</span>
        </div>

    </section>
</template>
