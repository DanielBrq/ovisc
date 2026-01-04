<script setup lang="ts">
import { Role } from "~/shared";
import type AccordionPanel from 'primevue/accordionpanel';

useHead({
    title: 'Mi cuenta' //Aplicar i18n
});

const { User } = useAuth();

const isPlayer = computed(() => User.value.role === Role.Player);
const isLeader = computed(() => User.value.role === Role.Leader);
const isAdmin = computed(() => User.value.role === Role.Admin);
// =========================================================

</script>
<template>

    <div class="flex flex-col gap-4 w-full px-2">

        <div class="flex flex-row items-center justify-start gap-2">
            <user-img size="small" :image="User.image" :name="User.name" />
            <p class="ovis-gradient-w pointer-events-none text-xl font-bold">{{ User.name }}</p>
        </div>

        <div v-if="isPlayer">
            <user-player-stats :uuid="User.uuid" />
        </div>
        <Accordion multiple :value="['0']" class="flex flex-col">

            <!-- Roles Section -->
            <AccordionPanel value="0" class="bg-gray-900/40 rounded-xl overflow-hidden border border-white/5">
                <AccordionHeader class="bg-transparent! p-4! border-0! group">
                    <div class="flex items-center gap-3 w-full">
                        <Icon name="material-symbols:badge-outline-rounded" size="22"
                            class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                        <span class="text-md font-semibold text-gray-200 group-hover:text-white transition-colors">Roles
                            de Usuario</span>
                    </div>
                </AccordionHeader>
                <AccordionContent class="bg-transparent! px-4! pb-4! pt-0!">
                    <user-jobs :uuid="User.uuid" />
                </AccordionContent>
            </AccordionPanel>

            <!-- Billetera Section -->
            <AccordionPanel value="1" class="bg-gray-900/40 rounded-xl overflow-hidden border border-white/5">
                <AccordionHeader class="bg-transparent! p-4! border-0! group">
                    <div class="flex items-center gap-3 w-full">
                        <Icon name="material-symbols:account-balance-wallet-outline-rounded" size="22"
                            class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                        <span
                            class="text-md font-semibold text-gray-200 group-hover:text-white transition-colors">Billetera
                            Digital</span>
                    </div>
                </AccordionHeader>
                <AccordionContent class="bg-transparent! px-4! pb-4! pt-0!">
                    <user-player-wallet :isVertical="false" :uuid="User.uuid" :showBronce="true" :showSilver="true"
                        :showGolden="true" :showRubi="true" :showEmerald="true" />
                </AccordionContent>
            </AccordionPanel>

            <!-- Logros Section -->
            <AccordionPanel value="2" class="bg-gray-900/40 rounded-xl overflow-hidden border border-white/5">
                <AccordionHeader class="bg-transparent! p-4! border-0! group">
                    <div class="flex items-center gap-3 w-full">
                        <Icon name="material-symbols:trophy-outline-rounded" size="22"
                            class="text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                        <span
                            class="text-md font-semibold text-gray-200 group-hover:text-white transition-colors">Logros
                            y Hazañas</span>
                    </div>
                </AccordionHeader>
                <AccordionContent class="bg-transparent! px-4! pb-4! pt-0!">
                    <user-player-achievements-preview :uuid="User.uuid" />
                </AccordionContent>
            </AccordionPanel>

        </Accordion>

    </div>

</template>

<style scoped>
/* Contenedor del panel */
:deep(.p-accordionpanel) {
    background-color: rgba(17, 24, 39, 0.4) !important;
    /* gray-900/40 */
    border: 1px solid rgba(255, 255, 255, 0.05) !important;
    border-radius: 0.75rem !important;
    margin-bottom: 0.75rem !important;
    transition: all 0.3s ease;
    overflow: hidden;
}

/* Eliminar bordes y focus de PrimeVue (el verde) */
:deep(.p-accordionheader),
:deep(.p-accordionheader:focus),
:deep(.p-accordionpanel-active),
:deep(.p-accordionheader:not(.p-disabled).p-accordionheader-active) {
    outline: none !important;
    box-shadow: none !important;
    border-color: rgba(255, 255, 255, 0.05) !important;
}

:deep(.p-accordionpanel:hover) {
    background-color: rgba(31, 41, 55, 0.6) !important;
    border-color: rgba(99, 102, 241, 0.2) !important;
}

/* Header del acordeón */
:deep(.p-accordionheader) {
    background: transparent !important;
    padding: 0 !important;
    border: 0 !important;
}

/* Línea divisoria interna */
:deep(.p-accordionpanel-active .p-accordionheader) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3) !important;
    /* Un nivel más oscuro que el fondo */
}

/* Contenido del acordeón */
:deep(.p-accordioncontent) {
    background: transparent !important;
    padding: 0 !important;
}

:deep(.p-accordioncontent-content) {
    background: transparent !important;
    padding: 1rem !important;
    padding-top: 0.75rem !important;
}

/* Icono de flecha */
:deep(.p-accordionheader-toggle-icon) {
    color: #6366f1 !important;
    /* indigo-500 */
    margin-right: 1rem;
    transition: transform 0.3s ease;
}

:deep(.p-accordionpanel-active .p-accordionheader-toggle-icon) {
    transform: rotate(180deg);
}
</style>
