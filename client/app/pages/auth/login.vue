<template>
    <div class="flex items-center justify-center h-screen ">
        <div class="p-4 bg-gray-900/40 h-full w-full flex items-center justify-center
        lg:border lg:border-fuchsia-300/10 lg:rounded-xl md:h-auto md:w-auto">
            <!-- IMG -->
            <div class="flex flex-row overflow-hidden">
                <img class="w-110 h-130 rounded-2xl object-cover hidden sm:block"
                    src="https://i0.wp.com/eltemploesports.com/wp-content/uploads/2024/02/Copia-de-_DSC5837-scaled.webp?resize=1024%2C683&ssl=1"
                    alt="gamecenter" />
                <!-- Login form -->
                <div class="flex flex-col items-center justify-center gap-12 lg:mx-10">
                    <p
                        class="bg-linear-to-r from-blue-500 to-rose-500 bg-clip-text font-extrabold text-transparent text-3xl md:text-5xl">
                        Iniciar Sesión
                    </p>

                    <!-- text input -->
                    <div class="flex flex-col w-auto gap-6 sm:w-[360px] sm:pl-0">
                        <div class="overflow-hidden border-lg">
                            <input class="text-field" type="text" placeholder="Ingrese su correo" />
                        </div>
                        <div class="overflow-hidden border-lg">
                            <input class="text-field" type="text" placeholder="Ingrese su contraseña" />
                        </div>

                        <!-- Button -->
                        <div class="flex flex-col gap-4 sm:w-[360px]">
                            <button type="button" class="btn-primary">
                                Login
                            </button>
                            <a href="#" class="text-center">
                                <p class="text-indigo-400/50 hover:text-indigo-500">
                                    Olvidé mi contraseña
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
