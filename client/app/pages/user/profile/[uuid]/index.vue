<script setup lang="ts">
useHead({
    title: 'Mi cuenta' //Aplicar i18n
});

const route = useRoute();
const uuid = route.params.uuid as string;
// url = http://localhost:3000/user/profile/12345678-1234-1234-1234-123456789012;

//hardcoded roles
enum Role {
    Player = 'player',
    Leader = 'leader',
    Admin = 'admin'
}

interface User {
    uuid: string;
    name: string;
    role: Role;
}

// Mock user data - replace with actual API call
const user = ref<User>({
    uuid: uuid,
    name: 'Mock User Name',
    role: Role.Player
});

const isPlayer = computed(() => user.value.role === Role.Player);
const isLeader = computed(() => user.value.role === Role.Leader);
const isAdmin = computed(() => user.value.role === Role.Admin);



</script>
<template>

    <div class="flex flex-col gap-2 w-full px-2">

        <div class="flex flex-row items-center justify-start gap-2">

            <user-img :uuid="uuid" />

            <p class="ovis-gradient-w pointer-events-none text-xl font-bold">{{ user.name }}</p>

        </div>

        <user-player-stats :uuid="uuid" />


        <user-jobs :uuid="uuid" />

    </div>

</template>
