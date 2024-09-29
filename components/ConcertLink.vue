<script setup lang="ts">
defineProps<{
  target: string | undefined;
  text: string;
}>();
</script>

<template>
  <a
    :href="target"
    class="lilita-one-regular mt-4 block select-none rounded-2xl border-2 p-2 text-2xl"
    target="_blank"
  >
    {{ text }}
  </a>
</template>
