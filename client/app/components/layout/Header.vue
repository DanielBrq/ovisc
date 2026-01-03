<script setup lang="ts">
//imports
import { ref } from 'vue';
import { AppRoutes, routeMyProfile } from '~/shared';
import { isMobile, isTablet, isDesktop } from '~/utils'
import Menu from 'primevue/menu';

const props = defineProps<{
    sidenavOpen: boolean
}>()

//trigger update props
const emit = defineEmits([
    'update:sidenavOpen',
])

const menu = ref();
const toggle = (event: Event) => {
    menu.value.toggle(event);
};

//get mock user | TODO: use real user
const { User } = useAuth();

//Profile options
const items = ref([
    {
        label: 'Mi perfil', //i18n
        icon: 'pi pi-user',
        command: () => {
            navigateTo(routeMyProfile(User.value?.uuid)); // Replace with actual profile route
        }
    },
    {
        label: 'Ajustes', //i18n
        icon: 'pi pi-cog',
        command: () => {
            // Navigate to settings
            navigateTo(AppRoutes.home); // Replace with actual settings route
        }
    },
    {
        separator: true
    },
    {
        label: 'Cerrar sesión', //i18n
        icon: 'pi pi-sign-out',
        command: () => {
            // TODO: Handle logout
            console.log('Logout clicked');
        }
    },
]);

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
            <NuxtLink :to="AppRoutes.home" class="flex items-center justify-start gap-2 text-white hover:text-gray-300">
                <span
                    class="bg-linear-to-r from-indigo-500 to-rose-500 bg-clip-text font-bold tracking-tight text-transparent 
                    text-2xl saturate-115 hover:saturate-200 active:saturate-200 transition-all duration-400">OVIS</span>
            </NuxtLink>

            <!-- Icons -->
            <div class="flex items-center gap-4">
                <layout-notification-inbox :isMobile="isMobile || isTablet" />
                <div class="relative">
                    <user-img :image="User.image" size="small" @click="toggle" aria-haspopup="true"
                        aria-controls="profile_menu" :name="User.name" />
                    <Menu ref="menu" id="profile_menu" :model="items" :popup="true" class="mt-2" />
                </div>
            </div>
        </div>

    </nav>
</template>