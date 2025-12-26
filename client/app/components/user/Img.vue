<script setup lang="ts">
interface Props {
    uuid?: string;
    image?: string;
    name: string;
    size: sizes;
    class?: string;
}

type sizes = 'small' | 'normal' | 'large' | 'xlarge'

const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase()
}
console.log(getInitials('Daniel'));
const props = defineProps<Props>()
</script>
<template>
    <div class="flex flex-col items-center">
        <Avatar v-if="props.image" :image="props.image" alt="Profile" shape="circle" :size="props.size"
            :class="`w-20 h-20 rounded-full object-cover block profile-img cursor-pointer ${props.class}`" />
        <Avatar v-else shape="circle" :size="props.size" :label="getInitials(props.name ?? 'U')" />
    </div>
</template>