<script setup>
import { match } from "ts-pattern";
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);

const displayedConcertCount = ref(0);
const displayedConcertManuallyChanged = ref(false);

const adjustDisplayedConcertCount = () => {
  if (displayedConcertManuallyChanged.value) {
    return;
  }

  if (breakpoints.xl.value) {
    displayedConcertCount.value = 7;
  } else if (breakpoints.lg.value) {
    displayedConcertCount.value = 5;
  } else if (breakpoints.sm.value) {
    displayedConcertCount.value = 3;
  } else {
    displayedConcertCount.value = 3;
  }
};

useEventListener("resize", adjustDisplayedConcertCount);
onMounted(adjustDisplayedConcertCount);

const concerts = [
  {
    date: "25 janvier 2025",
    location: "Mairie du XIV<sup>ème</sup>",
    image: "/images/concerts/2025-01-25.png",
    url: {
      kind: "Tickets Unavailable",
      target: undefined,
    },
  },
  {
    date: "7 décembre 2024",
    location: "Pavillon de la Sirène",
    image: "/images/concerts/2024-12-07.png",
    url: {
      kind: "Tickets Unavailable",
      target: undefined,
    },
  },
  {
    date: "28 juin 2024",
    location: "Temple Paris Batignolles",
    image: "/images/concerts/2024-06-28.png",
    url: {
      kind: "Video",
      target:
        "https://www.youtube.com/watch?v=bRKj0I16uIs&list=PLaKZ2HpaR66HlhepL8kLuCIE-NtkGLos0",
    },
  },
  {
    date: "29 janvier 2024",
    location: "Mairie du XIV<sup>ème</sup>",
    image: "/images/concerts/2024-01-24.png",
  },
  {
    date: "15 décembre 2023",
    location: "MPAA Saint Germain",
    image: "/images/concerts/2023-12-15.png",
    url: {
      kind: "Video",
      target: "https://www.youtube.com/watch?v=aLhweV3tKvc",
    },
  },
  {
    date: "29 juin 2023",
    location: "Lycée Rodin",
    image: "/images/concerts/2023-06-29.png",
    url: {
      kind: "Video",
      target: "https://www.youtube.com/watch?v=2NE-AwF7v2A",
    },
  },
];
</script>

<template>
  <div class="mx-auto max-w-screen-2xl px-4 py-16">
    <h1 class="oswald text-center text-6xl tracking-wider sm:text-7xl">
      NOS CONCERTS
    </h1>

    <div
      class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        v-for="concert in concerts.slice(0, displayedConcertCount)"
        :key="concert.date"
        class="flex flex-col rounded-3xl bg-slate-900 p-4 text-center text-white shadow-xl transition-all duration-200 hover:scale-105"
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
                .with(
                  'Tickets Unavailable',
                  () => 'Billets bientôt disponibles',
                )
                .exhaustive()
            "
            class="text-slate-950"
            :class="
              match(concert.url.kind)
                .with('Video', () => ['bg-[#ff5b62]', 'hover:bg-[#db4d53]'])
                .with('Tickets', () => ['bg-[#81ccb5]', 'hover:bg-[#6fb29e]'])
                .with('Tickets Unavailable', () => [
                  'bg-[#81ccb5]',
                  'brightness-75',
                ])
                .exhaustive()
            "
          />
        </div>
      </div>
      <div
        v-if="displayedConcertCount < concerts.length"
        class="lilita-one-regular flex min-h-44 flex-col items-center justify-center text-center text-[5rem]"
      >
        <button
          class="hover:slate-800 flex size-32 items-center justify-center gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-950"
          @click="
            displayedConcertCount += 2;
            displayedConcertManuallyChanged = true;
          "
        >
          <div
            v-for="i in [0, 1, 2]"
            :key="i"
            class="size-4 rounded-full bg-white"
          />
        </button>
      </div>
    </div>
  </div>
</template>
