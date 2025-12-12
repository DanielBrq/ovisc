<script setup lang="ts">
useHead({
    title: 'Mi cuenta' //Aplicar i18n
});

const route = useRoute();
const uuid = route.params.uuid as string;

//hardcoded roles =====================================
//TODO: Move to useAuth
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

// Mock user data - replace with actual API call =================
const user = ref<User>({
    uuid: uuid,
    name: 'Mock User Name',
    role: Role.Player
});

const isPlayer = computed(() => user.value.role === Role.Player);
const isLeader = computed(() => user.value.role === Role.Leader);
const isAdmin = computed(() => user.value.role === Role.Admin);
// =========================================================



</script>
<template>

    <div class="flex flex-col gap-4 w-full px-2">

        <div class="flex flex-row items-center justify-start gap-2">
            <user-img :uuid="uuid" />
            <p class="ovis-gradient-w pointer-events-none text-xl font-bold">{{ user.name }}</p>
        </div>

        <div v-if="isPlayer">
            <user-player-stats :uuid="uuid" />
        </div>

        <div>
            <p class="text-md font-semibold text-gray-300">Roles</p>
            <user-jobs :uuid="uuid" />
        </div>

        <div>
            <p class="text-md font-semibold text-gray-300">Billetera</p>
            <user-player-wallet :isVertical="false" :uuid="uuid" :showBronce="true" :showSilver="true"
                :showGolden="true" :showRubi="true" :showEmerald="true" />
        </div>

        <!-- Algunos Logros + Boton de ver todos -->


        <!-- Solicitudes de canjeo -->


    </div>

</template>
