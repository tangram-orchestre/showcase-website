<script setup lang="ts">
import { match } from "ts-pattern";

defineProps<{
  concert: Concert;
}>();
</script>

<template>
  <div
    class="flex flex-col rounded-3xl bg-slate-900 p-4 text-center text-white shadow-xl"
  >
    <NuxtImg
      :src="concert.image"
      class="mb-4 aspect-video rounded-2xl border-2"
      quality="70"
    />
    <div class="flex grow flex-col justify-center">
      <div
        class="lilita-one-regular text-2xl tracking-wide"
        v-html="concert.location"
      />
      <div class="raleway">{{ concert.date }}</div>

      <ConcertLink
        v-if="concert.url"
        :target="concert.url.target"
        :text="
          match(concert.url.kind)
            .with('Video', () => 'Voir la vidéo')
            .with('Tickets', () => 'Acheter mes billets')
            .with('Tickets Unavailable', () => 'Billets bientôt disponibles')
            .exhaustive()
        "
        class="text-slate-950"
        :class="[
          {
            'pointer-events-none': concert.url.kind === 'Tickets Unavailable',
          },
          ...match(concert.url.kind)
            .with('Video', () => ['bg-[#ff5b62]', 'hover:bg-[#db4d53]'])
            .with('Tickets', () => ['bg-[#81ccb5]', 'hover:bg-[#6fb29e]'])
            .with('Tickets Unavailable', () => [
              'bg-[#81ccb5]',
              'brightness-75',
            ])
            .exhaustive(),
        ]"
      />
    </div>
  </div>
</template>
