<script setup lang="ts">
import { ref } from "vue";

interface Props {
  uuid?: string;
  isVertical?: boolean;
  showBronce?: boolean;
  showSilver?: boolean;
  showGolden?: boolean;
  showRubi?: boolean;
}

const props = defineProps<Props>();

//hardcoded wallet
const wallet = ref({
  bronce: 999999,
  silver: 999999,
  golden: 999999,
  rubi: 999999,
  emerald: 999999,
});

//number formater
const formatNumber = (num: number) => {
  if (!num) return "0";
  return new Intl.NumberFormat("en-US").format(num);
};

//TODO: hacer las monedas componentes individual
</script>
<template>
  <section
    :class="{
      'flex flex-col': props.isVertical,
      'flex flex-wrap justify-start gap-3': !props.isVertical,
    }"
  >
    <div v-if="props.showBronce" class="flex items-center gap-2">
      <icon size="32" name="mdi:coin" class="text-ovis-accent-700" />
      <p class="text-ovis-accent-600 font-semibold text-lg pointer-events-none">
        {{ formatNumber(wallet.bronce) }}
      </p>
    </div>

    <div v-if="props.showSilver" class="flex items-center gap-2">
      <icon size="32" name="mdi:coin" class="text-ovis-neutral-300" />
      <p
        class="text-ovis-neutral-300 font-semibold text-lg pointer-events-none"
      >
        {{ formatNumber(wallet.silver) }}
      </p>
    </div>

    <div v-if="props.showGolden" class="flex items-center gap-2">
      <icon size="32" name="mdi:coin" class="text-ovis-accent-400" />
      <p class="text-ovis-accent-300 font-semibold text-lg pointer-events-none">
        {{ formatNumber(wallet.golden) }}
      </p>
    </div>

    <div v-if="props.showRubi" class="flex items-center gap-2">
      <icon size="32" name="mdi:coin" class="text-ovis-danger-500" />
      <p class="text-ovis-danger-400 font-semibold text-lg pointer-events-none">
        {{ formatNumber(wallet.rubi) }}
      </p>
    </div>
  </section>
</template>
