<script setup lang="ts">
const val = ref(0);
</script>

<template>
    <h1>{{ val }}</h1>
    <button @click="val += 1">Increment</button>
    <button @click="val -= 1">Decrement</button>
</template>