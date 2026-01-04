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
        to: AppRoutes.feed.index,
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
        to: AppRoutes.store.index,
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
        to: AppRoutes.event.index,
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
        to: AppRoutes.user.profile,
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
        <aside
            class="fixed top-0 left-0 h-full bg-gray-900 border-r border-gray-800 text-white flex flex-col transition-all duration-300 ease-in-out z-50 overflow-hidden"
            :class="props.sidenavOpen ? 'w-64' : 'w-16'">
            <!-- Logo / Header Section -->
            <div class="h-16 flex items-center px-4 shrink-0 overflow-hidden">
                <div class="flex items-center gap-3 w-full"
                    :class="props.sidenavOpen ? 'justify-between' : 'justify-center'">
                    <span v-if="props.sidenavOpen" class="font-bold text-xl ovis-gradient-w truncate">OVIS</span>
                    <button @click="toggleSidebar"
                        class="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white cursor-pointer">
                        <Icon size="24"
                            :name="props.sidenavOpen ? 'material-symbols:menu-open-rounded' : 'material-symbols:menu-rounded'" />
                    </button>
                </div>
            </div>

            <div class="flex-1 overflow-y-auto custom-scrollbar px-2 py-4">
                <ul class="flex flex-col gap-1.5 list-none p-0 m-0">
                    <li v-for="item in menuItems" :key="item.key">
                        <!-- Item con Submenú -->
                        <template v-if="item.subItems">
                            <layout-side-bar-button @toggle-submenu="toggleSubmenu(item.key)" :sidenavOpen="sidenavOpen"
                                :active="item.key" :arrow="true" :submenuIsOpen="openSubmenus[item.key]"
                                :isActive="props.active === item.key" :icon-name="item.icon" :to="item.to">
                                {{ item.label }}
                            </layout-side-bar-button>

                            <!-- Despliegue de botones -->
                            <div class="overflow-hidden transition-all duration-300 ease-in-out" :class="[
                                openSubmenus[item.key] && props.sidenavOpen ? 'max-h-64 opacity-100 mt-1' : 'max-h-0 opacity-0'
                            ]">
                                <div class="flex flex-col gap-1 pl-4 border-l border-gray-800 ml-6">
                                    <layout-side-bar-sub-button v-for="(subItem, index) in item.subItems" :key="index"
                                        :sidenavOpen="sidenavOpen" :to="subItem.to">
                                        {{ subItem.label }}
                                    </layout-side-bar-sub-button>
                                </div>
                            </div>
                        </template>

                        <!-- Item Link Directo -->
                        <template v-else>
                            <layout-side-bar-button :sidenavOpen="sidenavOpen" :active="item.key" :icon-name="item.icon"
                                :to="item.to" :isActive="props.active === item.key">
                                {{ item.label }}
                            </layout-side-bar-button>
                        </template>
                    </li>
                </ul>
            </div>
        </aside>
    </nav>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
    width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #4b5563;
}
</style>
