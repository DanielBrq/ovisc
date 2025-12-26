<script setup lang="ts">

const { User } = useAuth();

</script>
<template>

    <section class="flex flex-col h-screen">

        <feed-header />

        <feed-post />

    </section>

</template>
