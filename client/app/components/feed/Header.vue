<script setup lang="ts">

const { User } = useAuth()

</script>
<template>

    <section class="bg-indigo-400/10 h-12! w-full rounded-2xl mb-3">

        <div class="h-12 w-full flex items-center px-2 justify-between">

            <user-img :image="User.image" size="normal" :name="User.name" />

            <div class="flex gap-2 justify-end items-center">
                <ui-button class="btn-primary-outline rounded-full!" iconName="material-symbols:post-add-rounded"
                    label="Publicar" />
                <ui-button class="btn-primary-outline rounded-full! w-5!"
                    iconName="material-symbols:post-add-rounded" />
            </div>
        </div>
    </section>

</template>