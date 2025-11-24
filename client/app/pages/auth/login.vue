<script setup lang="ts">
import Divider from "primevue/divider";

useHead({
    title: 'Iniciar sesión' //Aplicar i18n
})

</script>

<template>
    <div class="flex items-center justify-center h-screen">
        <div class="bg-gray-900/40 h-full w-full flex justify-center px-4">

            <!-- Login form -->
            <form class="flex flex-col items-center justify-center gap-6">
                <div>
                    <p
                        class="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-bold tracking-tight bold text-transparent text-3xl mb-2">
                        Bienvenido de nuevo
                    </p>
                    <p class="text-balance text-sm text-muted-foreground text-gray-400">Inicia con tu cuenta de Google o
                        Facebook
                    </p>
                </div>
                <div class="flex flex-col gap-4 w-full">
                    <ui-button class="btn-secondary-outline w-min-[120px]!" type="button" icon-name="devicon:google">
                        Inicia con Google
                    </ui-button>
                    <ui-button class="btn-secondary-outline" type="button" icon-name="devicon:facebook">
                        Inicia con Facebook
                    </ui-button>
                </div>

                <Divider></Divider>

                <!-- text input -->
                <div class="overflow-hidden w-full">
                    <span class="text-white text-sm">Correo</span>
                    <ui-text-input type="email" placeholder="Ingrese su correo" />
                </div>
                <div class="overflow-hidden w-full">
                    <span class="text-white text-sm">Constraseña</span>
                    <ui-password-input placeholder="Ingrese su contraseña" />
                </div>
                <!-- Button -->
                <ui-button class="btn-primary-outline w-full" type="submit">
                    <NuxtLink to="/">
                        Login
                    </NuxtLink>
                </ui-button>
                <a href="#" class="text-center">
                    <p class="text-indigo-400/50 hover:text-indigo-500">
                        Olvidé mi contraseña
                    </p>
                </a>
            </form>
        </div>
    </div>
</template>
