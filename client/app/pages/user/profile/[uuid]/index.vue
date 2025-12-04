<script setup lang="ts">
useHead({
    title: 'Mi cuenta' //Aplicar i18n
});

//const route = useRoute();
const uuid = '12345678-1234-1234-1234-123456789012'; //hardcoded uuid
// url = http://localhost:3000/user/profile/12345678-1234-1234-1234-123456789012;


</script>
<template>

    <div class="flex w-full">
        <user-player-stats :uuid="uuid" />
    </div>

</template>
