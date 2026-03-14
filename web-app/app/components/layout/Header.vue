<script setup lang="ts">
//imports
import { ref } from 'vue';
import { AppRoutes, routeMyProfile } from '~/shared';
import { isMobile, isTablet, isDesktop } from '~/utils'

const props = defineProps<{
    sidenavOpen: boolean
}>()

//trigger update props
const emit = defineEmits([
    'update:sidenavOpen',
])

const isMenuOpen = ref(false);
const toggle = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

//get mock user | TODO: use real user
const { User } = useAuth();

//Profile options
const items = [
    {
        label: 'Mi perfil', //i18n
        icon: 'material-symbols:person-outline',
        command: () => {
            navigateTo(routeMyProfile(User.value?.uuid));
            isMenuOpen.value = false;
        }
    },
    {
        label: 'Ajustes', //i18n
        icon: 'material-symbols:settings-outline',
        command: () => {
            navigateTo(AppRoutes.home);
            isMenuOpen.value = false;
        }
    },
    {
        separator: true
    },
    {
        label: 'Cerrar sesión', //i18n
        icon: 'material-symbols:logout',
        command: () => {
            console.log('Logout clicked');
            isMenuOpen.value = false;
        }
    },
];

</script>
<template>
    <nav class="fixed top-0 right-0 h-12 z-40 transition-all duration-400" :class="[
        isDesktop && props.sidenavOpen ? 'left-60' :
            isDesktop && !props.sidenavOpen ? 'left-12' :
                'left-0'
    ]">

        <div class="flex items-center justify-between w-full h-full bg-gray-800 shadow-sm px-4 transition-all duration-400 border-b border-gray-700"
            :class="!props.sidenavOpen ? 'sm:mx-0' : ''">

            <!-- Logo -->
            <NuxtLink :to="AppRoutes.home"
                class="flex items-center justify-start gap-2 text-white hover:text-gray-300 ms-4">
                <span
                    class="bg-linear-to-r from-indigo-500 to-rose-500 bg-clip-text font-bold tracking-tight text-transparent 
                    text-2xl saturate-115 hover:saturate-200 active:saturate-200 transition-all duration-400">OVIS</span>
            </NuxtLink>

            <!-- Icons -->
            <div class="flex items-center gap-4">
                <layout-notification-inbox :isMobile="isMobile || isTablet" />
                <div class="relative">
                    <user-img :image="User.image" size="small" @click="toggle" aria-haspopup="true" :name="User.name"
                        class="cursor-pointer" />

                    <!-- Custom Dropdown Menu -->
                    <div v-if="isMenuOpen"
                        class="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
                        <div class="py-1">
                            <template v-for="(item, index) in items" :key="index">
                                <template v-if="item.separator">
                                    <div class="border-t border-gray-700 my-1"></div>
                                </template>
                                <template v-else>
                                    <button @click="item.command"
                                        class="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                                        <Icon v-if="item.icon" :name="item.icon" size="18" class="text-indigo-400" />
                                        {{ item.label }}
                                    </button>
                                </template>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</template>