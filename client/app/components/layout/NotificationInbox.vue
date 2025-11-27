<script setup lang="ts">

const isOpen = ref(false);

const toggle = () => {
    isOpen.value = !isOpen.value;
}

//props
const props = defineProps({
    isMobile: Boolean
});

</script>
<template>

    <div v-if="isMobile">
        <NuxtLink to="/">
            <icon name="material-symbols:notifications-outline-rounded" size="26"
                class="text-gray-300 hover:text-white cursor-pointer transition-colors" />
        </NuxtLink>
    </div>


</template>