<script setup lang="ts">
useHead({
  title: "Playground",
});
</script>

<template>
  <div
    class="min-h-screen px-6 py-8"
    :style="{ background: 'var(--app-bg)', color: 'var(--app-text)' }"
  >
    <div class="flex items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold">Playground</h1>
        <p class="text-sm text-ovis-neutral-400">
          UI sandbox para probar todos los componentes.
        </p>
      </div>
    </div>

    <section class="mt-8 space-y-4">
      <h2 class="text-lg font-semibold">Layout</h2>
      <div class="text-sm text-ovis-neutral-400">
        Estos componentes usan posicionamiento fixed.
      </div>

      <div class="mt-4">
        <layout-notification-inbox :isMobile="false" />
      </div>
      <div class="mt-4 flex gap-3">
        <layout-side-bar-button
          :sidenavOpen="true"
          active="home"
          :isActive="true"
          icon-name="material-symbols:home-outline-rounded"
          to="/"
        >
          Inicio
        </layout-side-bar-button>
        <layout-side-bar-sub-button :sidenavOpen="true" to="/">
          Subitem
        </layout-side-bar-sub-button>
      </div>
    </section>

    <section class="mt-10 space-y-4">
      <h2 class="text-lg font-semibold">UI</h2>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ui-button label="Primario" button-type="secondary" />
        <ui-button label="Secundario" button-type="primary" />
        <ui-button label="Peligro" button-type="danger" />
        <ui-button label="Éxito" button-type="success" />
        <ui-button label="Warning" button-type="warning" />
        <ui-button label="Outline" button-type="outline" />
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ui-text-input placeholder="Texto" />
        <ui-password-input placeholder="Password" />
        <ui-search-input placeholder="Buscar..." />
      </div>
    </section>

    <section class="mt-10 space-y-4">
      <h2 class="text-lg font-semibold">Home</h2>
      <home-card label="Card demo" to="/" />
    </section>

    <section class="mt-10 space-y-4">
      <h2 class="text-lg font-semibold">Store</h2>
      <store-searcher />
    </section>

    <section class="mt-10 space-y-4">
      <h2 class="text-lg font-semibold">User</h2>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <user-img name="Daniel" size="large" />
        <user-jobs uuid="demo" />
        <user-player-achievements uuid="demo" />
        <user-player-achievements-preview uuid="demo" />
        <user-player-experience-bar uuid="demo" />
        <user-player-level uuid="demo" :show-label="true" :show-level="true" />
        <user-player-wallet
          uuid="demo"
          :show-bronce="true"
          :show-silver="true"
          :show-golden="true"
          :show-rubi="true"
        />
      </div>
    </section>
  </div>
</template>
