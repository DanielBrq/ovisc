<script setup lang="ts">
import { Role } from "~/shared";

useHead({
  title: "Mi cuenta", //Aplicar i18n
});

const { User } = useAuth();

const isPlayer = computed(() => User.value.role === Role.Player);
const isLeader = computed(() => User.value.role === Role.Leader);
const isAdmin = computed(() => User.value.role === Role.Admin);

const activeTab = ref<string | null>("0");

function toggleTab(id: string) {
  activeTab.value = activeTab.value === id ? null : id;
}
</script>
<template>
  <div class="flex flex-col gap-4 w-full px-2">
    <div class="flex flex-row items-center justify-start gap-2">
      <user-img size="small" :image="User.image" :name="User.name" />
      <p class="ovis-gradient-w pointer-events-none text-xl font-bold">
        {{ User.name }}
      </p>
    </div>

    <div v-if="isPlayer">
      <user-player-stats :uuid="User.uuid" />
    </div>

    <div class="flex flex-col gap-3">
      <!-- Roles Section -->
      <div
        class="bg-gray-900/40 rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
        :class="{ 'bg-gray-800/60 border-indigo-500/20': activeTab === '0' }"
      >
        <button
          @click="toggleTab('0')"
          class="w-full flex items-center justify-between p-4 group"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:badge-outline-rounded"
              size="22"
              class="text-indigo-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="text-md font-semibold text-gray-200 group-hover:text-white transition-colors"
              >Roles de Usuario</span
            >
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-gray-500 transition-transform duration-300"
            :class="{ 'rotate-180': activeTab === '0' }"
          />
        </button>
        <div
          v-show="activeTab === '0'"
          class="px-4 pb-4 transition-all duration-300"
        >
          <user-jobs :uuid="User.uuid" />
        </div>
      </div>

      <!-- Billetera Section -->
      <div
        class="bg-gray-900/40 rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
        :class="{ 'bg-gray-800/60 border-indigo-500/20': activeTab === '1' }"
      >
        <button
          @click="toggleTab('1')"
          class="w-full flex items-center justify-between p-4 group"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:account-balance-wallet-outline-rounded"
              size="22"
              class="text-indigo-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="text-md font-semibold text-gray-200 group-hover:text-white transition-colors"
              >Billetera Digital</span
            >
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-gray-500 transition-transform duration-300"
            :class="{ 'rotate-180': activeTab === '1' }"
          />
        </button>
        <div v-show="activeTab === '1'" class="px-4 pb-4">
          <user-player-wallet
            :isVertical="false"
            :uuid="User.uuid"
            :showBronce="true"
            :showSilver="true"
            :showGolden="true"
            :showRubi="true"
            :showEmerald="true"
          />
        </div>
      </div>

      <!-- Logros Section -->
      <div
        class="bg-gray-900/40 rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
        :class="{ 'bg-gray-800/60 border-indigo-500/20': activeTab === '2' }"
      >
        <button
          @click="toggleTab('2')"
          class="w-full flex items-center justify-between p-4 group"
        >
          <div class="flex items-center gap-3">
            <Icon
              name="material-symbols:trophy-outline-rounded"
              size="22"
              class="text-indigo-400 group-hover:scale-110 transition-transform duration-300"
            />
            <span
              class="text-md font-semibold text-gray-200 group-hover:text-white transition-colors"
              >Logros y Hazañas</span
            >
          </div>
          <Icon
            name="material-symbols:keyboard-arrow-down-rounded"
            size="24"
            class="text-gray-500 transition-transform duration-300"
            :class="{ 'rotate-180': activeTab === '2' }"
          />
        </button>
        <div v-show="activeTab === '2'" class="px-4 pb-4">
          <user-player-achievements-preview :uuid="User.uuid" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
