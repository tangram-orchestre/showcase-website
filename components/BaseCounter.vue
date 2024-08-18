<script setup lang="ts">
const val = ref(0);
</script>

<template>
  <h1>{{ val }}</h1>
  <div class="flex">
    <button
      class="m-2 bg-red-400 p-2"
      @click="val += 1"
    >
      Increment
    </button>
    <button
      class="m-2 bg-green-300 p-2"
      @click="val -= 1"
    >
      Decrement
    </button>
  </div>
</template>
