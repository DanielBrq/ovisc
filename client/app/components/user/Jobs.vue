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
    }
]);

//TODO: Roles should come from API
//TODO: Label Roles should be i18n
</script>
<template>

    <p class="ovis-gradient-w">Roles:</p>
    <div class="flex w-full gap-4 -mt-3">
        <div v-for="job in jobs" :key="job.name" class="">
            <p :class="job.style"># {{ job.name }}</p>
        </div>
    </div>

</template>