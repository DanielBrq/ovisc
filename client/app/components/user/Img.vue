<script setup lang="ts">
interface Props {
    uuid: string;
}
const profileImg = ref('')
const props = defineProps<Props>()
</script>
<template>
    <div class="flex flex-col items-center">
        <img v-if="profileImg" :src="profileImg" alt="Profile"
            class="w-20 h-20 rounded-full object-cover block profile-img">
        <icon v-else name="solar:user-circle-bold-duotone" class="text-gray-400 block size-20 profile-img" />
    </div>
</template>