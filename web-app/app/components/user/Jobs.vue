<script setup lang="ts">

interface Props {
    uuid: string;
}

const props = defineProps<Props>();

//hardcoded jobs list JSON
const jobs = ref([
    {
        name: 'Músico',
        style: 'badge-primary'
    },
    {
        name: 'Líder',
        style: 'badge-warning'

    },
    {
        name: 'Tesorero',
        style: 'badge-danger'
    },
    {
        name: 'Músico',
        style: 'badge-success'
    },
    {
        name: 'Líder',
        style: 'badge-danger'

    }
]);

//TODO: Roles should come from API
//TODO: Label Roles should be i18n
</script>
<template>

    <div class="flex flex-wrap w-full gap-4">
        <div v-for="job in jobs" :key="job.name" class="">
            <p class="text-nowrap pointer-events-none" :class="job.style"># {{ job.name }}</p>
        </div>
    </div>

</template>