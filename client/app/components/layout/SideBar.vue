<script setup lang="ts">
import { AppRoutes } from '~/shared';

const openSubmenus = ref<Record<string, boolean>>({
    feed: false,
    store: false,
    event: false,
    profile: false
});

function toggleSubmenu(key: string) {
    if (openSubmenus.value.hasOwnProperty(key)) {
        openSubmenus.value[key] = !openSubmenus.value[key];
    } else {
        openSubmenus.value[key] = true;
    }
}

const props = defineProps<{
    sidenavOpen: boolean
    active: string
}>()

//trigger update props
const emit = defineEmits([
    'update:sidenavOpen',
    'update:active'
])

//switch true-false
function toggleSidebar() {
    emit('update:sidenavOpen', !props.sidenavOpen)
}

const menuItems = [
    {
        key: 'home',
        label: 'Home', //i18n
        icon: 'material-symbols:home-outline-rounded',
        img: '',
        to: AppRoutes.home
    },
    {
        key: 'feed',
        label: 'Feed', //i18n
        icon: 'material-symbols:article-outline-rounded',
        img: '',
        subItems: [
            { label: 'Sub A', to: AppRoutes.home },
            { label: 'Sub B', to: AppRoutes.home },
            { label: 'Sub C', to: AppRoutes.home },
            { label: 'Sub D', to: AppRoutes.home },
        ]
    },
    {
        key: 'store',
        label: 'Store', //i18n
        icon: 'material-symbols:storefront-outline-rounded',
        img: '',
        subItems: [
            { label: 'Sub A', to: AppRoutes.home },
            { label: 'Sub B', to: AppRoutes.home },
            { label: 'Sub C', to: AppRoutes.home },
        ]
    },
    {
        key: 'event',
        label: 'Event', //i18n
        icon: 'material-symbols:calendar-month-outline-rounded',
        img: '',
        subItems: [
            { label: 'Sub A', to: AppRoutes.home },
            { label: 'Sub B', to: AppRoutes.home },
            { label: 'Sub C', to: AppRoutes.home },
        ]
    },
    {
        key: 'profile',
        label: 'Profile', //i18n
        icon: 'material-symbols:person-outline-rounded',
        img: '',
        subItems: [
            { label: 'Sub A', to: AppRoutes.home },
            { label: 'Sub B', to: AppRoutes.home },
            { label: 'Sub C', to: AppRoutes.home },
        ]
    }
]

</script>
<template>
    <nav>
        <aside class="fixed top-0 left-0 h-full bg-gray-800 text-white
        flex flex-col transition-all duration-400 overflow-hidden z-50" :class="props.sidenavOpen ? 'w-60' : 'w-12'">

            <!-- Botón open/close siempre visible -->
            <div class="flex" :class="props.sidenavOpen ? 'justify-end pr-4' : 'justify-center'">
                <button class="pt-3 -mb-3 transition-colors" @click="toggleSidebar">
                    <icon size="24" name="material-symbols:menu-rounded" />
                </button>
            </div>

            <divider />

            <!-- Menu de opciones -->
            <ul class="flex flex-col gap-1 pr-2 duration-400"
                :class="props.sidenavOpen ? 'justify-start' : 'justify-center items-center'">

                <li v-for="item in menuItems" :key="item.key">
                    <!-- Item con Submenú -->
                    <template v-if="item.subItems">
                        <layout-side-bar-button @toggle-submenu="toggleSubmenu(item.key)" :sidenavOpen="sidenavOpen"
                            :active="item.key" :arrow="true" :submenuIsOpen="openSubmenus[item.key]"
                            :icon-name="item.icon">
                            {{ item.label }}
                        </layout-side-bar-button>

                        <!-- Despliegue de botones nuxtLink -->
                        <div v-if="sidenavOpen"
                            class="flex flex-col gap-2 overflow-hidden transition-all duration-500 justify-start"
                            :class="openSubmenus[item.key] ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'">
                            <layout-side-bar-sub-button v-for="(subItem, index) in item.subItems" :key="index"
                                :sidenavOpen="sidenavOpen" class="ms-2" :to="subItem.to">
                                {{ subItem.label }}
                            </layout-side-bar-sub-button>
                        </div>
                    </template>

                    <!-- Item Link Directo (sin submenú) -->
                    <template v-else>
                        <layout-side-bar-button :sidenavOpen="sidenavOpen" :active="item.key" :icon-name="item.icon"
                            :to="item.to">
                            {{ item.label }}
                        </layout-side-bar-button>
                    </template>
                </li>
            </ul>
        </aside>
    </nav>
</template>
