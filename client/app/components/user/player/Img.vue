<script setup lang="ts">
interface Props {
    uuid: string;
}
const profileImg = ref('')
const props = defineProps<Props>()
</script>
<template>
    <div class="flex flex-col items-center gap-2">
        <img v-if="profileImg" :src="profileImg" alt="Profile" class="w-20 h-20 rounded-full object-cover">
        <icon v-else name="solar:user-circle-bold-duotone" size="80" class="text-gray-400" />
    </div>

</template>