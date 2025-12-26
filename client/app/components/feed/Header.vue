<script setup lang="ts">

const { User } = useAuth()

</script>
<template>

    <section class="bg-indigo-400/10 h-12! w-full rounded-2xl mb-3">

        <div class="h-12 w-full flex items-center px-2">

            <user-img :image="User.image" size="normal" :name="User.name" />

        </div>

    </section>

</template>