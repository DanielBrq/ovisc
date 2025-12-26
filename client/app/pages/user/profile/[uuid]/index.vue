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
            <user-img :image="User.image" />
            <p class="ovis-gradient-w pointer-events-none text-xl font-bold">{{ User.name }}</p>
        </div>

        <div v-if="isPlayer">
            <user-player-stats :uuid="User.uuid" />
        </div>
        <Accordion multiple>

            <AccordionPanel value="0">
                <accordion-header class="bg-transparent!">
                    <p class="text-md font-semibold text-gray-300">Roles</p>
                </accordion-header>
                <AccordionContent unstyled class="mb-4">
                    <user-jobs :uuid="User.uuid" />
                </AccordionContent>
            </AccordionPanel>

            <AccordionPanel value="1">
                <accordion-header class="bg-transparent!">
                    <p class="text-md font-semibold text-gray-300">Billetera</p>
                </accordion-header>
                <AccordionContent unstyled class="mb-4">
                    <user-player-wallet :isVertical="false" :uuid="User.uuid" :showBronce="true" :showSilver="true"
                        :showGolden="true" :showRubi="true" :showEmerald="true" />
                </AccordionContent>
            </AccordionPanel>

            <!-- Algunos Logros + Boton de ver todos -->
            <AccordionPanel value="2">
                <AccordionHeader class="bg-transparent!">
                    <p class="text-md font-semibold text-gray-300">Logros</p>
                </AccordionHeader>
                <AccordionContent unstyled class="mb-4">
                    <user-player-achievements-preview :uuid="User.uuid" />
                </AccordionContent>
            </AccordionPanel>


        </Accordion>

    </div>

</template>
