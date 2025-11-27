<script setup lang="ts">

// const submenuOpen = ref({ isOpen: false, navOption: '' });

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

</script>
<template>
    <nav>
        <aside class="fixed top-0 left-0 h-full bg-gray-800 text-white
        flex flex-col transition-all duration-400 overflow-hidden z-50"
            :class="props.sidenavOpen ? 'w-60' : 'w-12 rounded-r-2xl'">

            <!-- Botón open/close siempre visible -->
            <div class="flex" :class="props.sidenavOpen ? 'justify-end pr-4' : 'justify-center'">
                <button class="pt-3 -mb-3 transition-colors" @click="toggleSidebar">
                    <icon size="27" name="material-symbols:lists-rounded" />
                </button>
            </div>

            <divider />

            <!-- Menu de opciones -->
            <ul class="mt-4 flex flex-col gap-1 pr-2 transition-opacity duration-200"
                :class="props.sidenavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'">

                <!-- Home -->
                <li>
                    <layout-side-bar-button :sidenavOpen="sidenavOpen" active="home"
                        icon-name="material-symbols:home-app-logo" to="/">Home</layout-side-bar-button>
                </li>

                <!-- Feed -->
                <li>
                    <layout-side-bar-button @toggle-submenu="toggleSubmenu('feed')" :sidenavOpen="sidenavOpen"
                        active="feed" :arrow="true" :submenuIsOpen="openSubmenus.feed"
                        icon-name="material-symbols:post-outline-rounded">Feed
                    </layout-side-bar-button>

                    <!-- Despliegue de botones nuxtLink -->
                    <div class="flex flex-col gap-2 overflow-hidden transition-all duration-500 justify-start"
                        :class="openSubmenus.feed ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'">
                        <layout-side-bar-sub-button :sidenavOpen="sidenavOpen" class="ms-2" to="/">Sub
                            A</layout-side-bar-sub-button>
                        <layout-side-bar-sub-button :sidenavOpen="sidenavOpen" class="ms-2" to="/">Sub
                            B</layout-side-bar-sub-button>
                        <layout-side-bar-sub-button :sidenavOpen="sidenavOpen" class="ms-2" to="/">Sub
                            C</layout-side-bar-sub-button>
                    </div>
                </li>

                <!-- Store -->
                <li>
                    <layout-side-bar-button :sidenavOpen="sidenavOpen" active="store"
                        @toggle-submenu="toggleSubmenu('store')" icon-name="material-symbols:store-rounded"
                        to="/">Store</layout-side-bar-button>

                    <!-- Despliegue de botones nuxtLink -->
                    <div class="pl-4 flex flex-col gap-4 overflow-hidden transition-all duration-500 bg-emerald-700"
                        :class="openSubmenus.store ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'">
                        <layout-side-bar-sub-button :sidenavOpen="sidenavOpen" class="ms-2" to="/">Sub
                            A</layout-side-bar-sub-button>
                        <layout-side-bar-sub-button :sidenavOpen="sidenavOpen" class="ms-2" to="/">Sub
                            B</layout-side-bar-sub-button>
                        <layout-side-bar-sub-button :sidenavOpen="sidenavOpen" class="ms-2" to="/">Sub
                            C</layout-side-bar-sub-button>
                    </div>

                </li>

                <!-- Event -->
                <li>
                    <layout-side-bar-button :sidenavOpen="sidenavOpen" active="event"
                        @toggle-submenu="toggleSubmenu('event')" icon-name="material-symbols:event-outline"
                        to="/">Event</layout-side-bar-button>
                </li>

                <!-- Profile -->
                <li>
                    <layout-side-bar-button :sidenavOpen="sidenavOpen" active="profile"
                        @toggle-submenu="toggleSubmenu('profile')" icon-name="material-symbols:supervised-user-circle"
                        to="/">Profile</layout-side-bar-button>
                </li>
            </ul>

        </aside>

    </nav>
</template>
