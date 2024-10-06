<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import type ConcertCard from "./ConcertCard.vue";

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

const isLocked = useScrollLock(window);

const focus: Ref<{
  index: number;
  element: HTMLDivElement;
  leaving: boolean;
} | null> = ref(null);
const focused = ref({
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
});

const updateFocusedSource = (element: HTMLDivElement) => {
  const rect = element.getBoundingClientRect();
  focused.value.top = rect.top + "px";
  focused.value.right = window.innerWidth - rect.right + "px";
  focused.value.bottom = window.innerHeight - rect.bottom + "px";
  focused.value.left = rect.left + "px";
};

const concertRefs = useTemplateRefsList<InstanceType<typeof ConcertCard>>();
const focusConcert = (index: number) => {
  const element = concertRefs.value[index].$el as HTMLDivElement;
  updateFocusedSource(element);
  isLocked.value = true;
  focus.value = { index, element, leaving: false };
};

useEventListener("resize", () => {
  if (focus.value) {
    updateFocusedSource(focus.value.element);
  }
});

const concerts: Array<Concert> = [
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
    program: [
      "OSS 117",
      "(Flying) Peter Pan",
      "Pirates des Caraïbes",
      "La planète au Trésor / Dinosaure / Atlantis",
      '<span class="inline-block">Recette pour un cake d\'amour</span> <span class="inline-block">(Peau d\'Âne)</span>',
      "How Far I'll Go (Vaiana)",
      "Undertale Medley",
      "Pelléas et Mélisande",
      "Endcaller (Final Fantasy XIV)",
      "This Land (Le Roi Lion)",
      "Le Château dans le Ciel",
      "Medley Abba",
    ],
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
  <div ref="el" class="mx-auto max-w-screen-2xl px-8 py-16">
    <h1 class="oswald text-center text-6xl tracking-wider sm:text-7xl">
      NOS CONCERTS
    </h1>

    <Transition>
      <div
        v-if="focus && !focus.leaving"
        class="backdrop fixed z-10 size-full"
        @click="focus.leaving = true"
      />
    </Transition>
    <Transition
      name="focus"
      @after-leave="
        focus = null;
        isLocked = false;
      "
    >
      <Teleport to="body">
        <div
          v-if="focus && !focus.leaving"
          class="focused-container z-20"
          @click="focus.leaving = true"
        >
          <div class="focused-container-inner">
            <ConcertCard
              :concert="concerts[focus.index]"
              class="backface-hidden absolute size-full"
            />
            <div
              class="backface-hidden back flex size-full grow flex-col rounded-3xl border-4 bg-slate-900 p-4 text-white shadow-xl"
            >
              <div class="flex h-full flex-col overflow-scroll">
                <h2 class="lilita-one-regular my-8 text-5xl">Programme</h2>
                <ul
                  class="raleway flex h-fit grow flex-col justify-center text-2xl"
                >
                  <li
                    v-for="part in concerts[focus.index].program"
                    :key="part"
                    class="my-4"
                    v-html="part"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Teleport>
    </Transition>

    <div
      class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <ConcertCard
        v-for="(concert, index) in concerts.slice(0, displayedConcertCount)"
        :ref="concertRefs.set"
        :key="concert.date"
        :concert="concert"
        :class="{
          'opacity-0 transition-none': index === focus?.index,
        }"
        class="cursor-pointer"
        @click="focusConcert(index)"
      />

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

<style scoped lang="scss">
.focused-container {
  position: fixed;
  perspective: 1000px;
  top: 10%;
  right: 0;
  bottom: 10%;
  left: 0;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 600px) {
  .focused-container {
    margin: 0 10px;
  }
}

.focused-container-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.focused-container .focused-container-inner {
  transform: rotateY(180deg);
}

/* Style the back side */
.back {
  transform: rotateY(180deg);
}

.backface-hidden {
  *,
  & {
    backface-visibility: hidden;
  }
}

$animate-time: 700ms;
$flip-ratio: 0.7;
$flip-time: $animate-time * $flip-ratio;
$flip-reverse-delay: $animate-time - $flip-time;

.focus-enter-active,
.focus-leave-active {
  transition: all $animate-time ease-in-out;
}
.focus-enter-active.focused-container .focused-container-inner {
  transition: all $flip-time ease-in-out;
}
.focus-leave-active.focused-container .focused-container-inner {
  transition: all $flip-time $flip-reverse-delay ease-in-out;
}

.focus-enter-from,
.focus-leave-to {
  top: v-bind("focused.top");
  right: v-bind("focused.right");
  bottom: v-bind("focused.bottom");
  left: v-bind("focused.left");

  &.focused-container .focused-container-inner {
    transform: none;
  }
}

.backdrop {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(5px);
  transition: all $animate-time;

  &.v-enter-from,
  &.v-leave-to {
    backdrop-filter: blur(0);
  }
}
</style>
