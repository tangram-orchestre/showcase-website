<script setup lang="ts">
import ConcertLink from "../components/ConcertLink.vue";
import { match } from "ts-pattern";

const missions = [
  {
    title: "FAIRE DÉCOUVRIR LA DIRECTION",
    message: [
      "Chez Tangram, nous croyons à la démocratisation de l’<strong>art de la direction d’orchestre</strong>.",
      "Notre ensemble offre des opportunités uniques aux musicien·ne·s amateur·e·s de monter sur le podium et d'<strong>explorer</strong> les rôles de chef·fe d’orchestre et d’arrangeur·euse.",
      "À travers des <strong>ateliers</strong> et des <strong>projets semestriels</strong>, chacun·e peut découvrir la joie de diriger un orchestre.",
    ],
    images: [
      "/images/chefs/cc.jpg",
      "/images/chefs/rindra.jpg",
      "/images/chefs/simon.jpg",
      "/images/chefs/guillaume.jpg",
      "/images/chefs/ryad.jpg",
      "/images/chefs/zelie.jpg",
    ],
    title_classes: ["text-[#81ccb5]"],
  },
  {
    title: "IMPLIQUER LE PUBLIC",
    message: [
      "Nous souhaitons <strong>rapprocher les musicien·ne·s et le public</strong> en démystifiant les rôles de chef·fe d’orchestre et d’arrangeur·euse. ",
      "À travers des présentations de concert enrichissantes et des <strong>clés d’écoute</strong>, nous invitons le public à <strong>voir</strong>, <strong>entendre</strong> et <strong>comprendre</strong> plus profondément le processus de création musicale.",
    ],
    images: ["/images/partoches.jpg"],
    title_classes: ["text-[#81ccb5]"],
  },
  {
    title: "SE RASSEMBLER AVEC LA MUSIQUE",
    message: [
      "Chez Tangram, l’essentiel est de faire de la musique avec <strong>joie et bienveillance</strong>. Chacun·e apporte son énergie et sa sensibilité pour enrichir notre son collectif.",
      "Votre présence et votre enthousiasme font la différence et contribuent à une <strong>aventure musicale partagée</strong>.",
    ],
    images: ["/images/groupe-a24.jpg"],
    title_classes: ["text-[#81ccb5]"],
  },
];

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

const currentImageIndex = ref(0);

const previousImage = (list: string[]) => {
  return (currentImageIndex.value - 1) % list.length;
};

const currentImage = (list: string[]) => {
  return currentImageIndex.value % list.length;
};

const nextImage = (list: string[]) => {
  return (currentImageIndex.value + 1) % list.length;
};

useIntervalFn(() => {
  currentImageIndex.value++;
}, 8000);
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <Head>
    <Title>Tangram Orchestre</Title>
  </Head>

  <div class="min-h-screen overflow-hidden">
    <div
      class="roboto-light fixed top-0 z-30 w-full bg-white p-4 text-center text-3xl text-gray-800 shadow-xl"
    >
      TANGRAM
    </div>

    <div
      class="heading mx-auto mb-20 mt-40 grid max-w-4xl justify-items-center ease-in-out"
    >
      <div class="logo">
        <TheLogo class="size-full" />
      </div>
      <div
        class="title-container flex flex-col items-center justify-center pt-4 drop-shadow-2xl transition-opacity duration-1000 lg:pt-0"
      >
        <div
          class="title roboto-thin text-[calc(clamp(1px,15vw,6rem))] leading-[1.067em]"
        >
          TANGRAM
        </div>
        <div
          class="sub-title oswald text-center text-[calc(clamp(1px,3vw,1.3rem))] tracking-wide"
        >
          Orchestre amateur pour Chef⸱fe⸱s en herbe
        </div>
      </div>
    </div>

    <main>
      <div class="bg-slate-900 px-4 py-12 text-white">
        <h1
          class="oswald my-8 text-center text-5xl tracking-wider sm:my-8 sm:text-7xl"
        >
          NOS MISSIONS
        </h1>
        <div
          v-for="(item, index) in missions"
          :key="item.title"
          class="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-8 gap-y-4 py-10 sm:grid-cols-2"
        >
          <div class="my-auto">
            <h2
              class="lilita-one-regular text-center text-4xl"
              :class="item.title_classes"
            >
              {{ item.title }}
            </h2>
            <p
              v-for="paragraph in item.message"
              :key="paragraph"
              class="raleway my-4 hyphens-auto text-pretty text-justify indent-8 sm:mb-0 sm:mt-4 sm:text-lg"
              lang="fr"
              v-html="paragraph"
            ></p>
          </div>
          <div
            :class="{ 'sm:order-first': index % 2 == 1 }"
            class="flex items-center md:px-2"
          >
            <div
              class="image-shadow relative aspect-video w-full rounded-2xl border-[#ffffff8f]"
            >
              <NuxtImg
                v-for="(image, imageIndex) in [
                  item.images[previousImage(item.images)],
                  item.images[currentImage(item.images)],
                  item.images[nextImage(item.images)],
                ]"
                :key="image"
                :src="image"
                :class="
                  imageIndex == 1
                    ? 'z-10 opacity-100'
                    : 'z-0 opacity-0 delay-1000'
                "
                class="absolute inset-0 rounded-2xl border-2 transition-opacity duration-1000"
                placeholder
                quality="70"
              ></NuxtImg>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto min-h-screen max-w-screen-2xl px-4 py-12">
        <h1
          class="oswald mt-8 text-center text-5xl tracking-wider sm:my-8 sm:text-7xl"
        >
          NOS CONCERTS
        </h1>

        <div
          class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <div
            v-for="concert in concerts"
            :key="concert.date"
            class="flex flex-col rounded-3xl bg-slate-900 p-4 text-center text-white shadow-xl transition-all duration-200 hover:scale-105"
          >
            <NuxtImg
              :src="concert.image"
              class="mb-4 aspect-video rounded-2xl border-2"
              placeholder
              quality="70"
            />
            <div class="flex grow flex-col justify-center">
              <div
                class="lilita-one-regular text-2xl tracking-wide"
                v-html="concert.location"
              ></div>
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
                    .with('Tickets', () => [
                      'bg-[#81ccb5]',
                      'hover:bg-[#6fb29e]',
                    ])
                    .with('Tickets Unavailable', () => [
                      'bg-[#81ccb5]',
                      'brightness-75',
                    ])
                    .exhaustive()
                "
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
$animate-in-title-time: 1500ms;
$animate-in-title-duration: 1000ms;
$animate-in-main-time: $animate-in-title-time + 700ms;
$animate-in-main-duration: 1000ms;

.logo {
  min-width: 150px;
  @media (min-width: 300px) {
    height: 180px;
  }
  @media (min-width: 400px) {
    height: 290px;
  }
}

@keyframes grid-animation {
  from {
    grid-template-columns: 100% 0;
  }
  to {
    grid-template-columns: 40% 60%;
  }
}

@keyframes opacity-animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 100%;
  }
}

@media (min-width: 1024px) {
  .heading {
    animation: grid-animation $animate-in-title-duration ease-in-out
      $animate-in-title-time forwards;
    max-width: 950px;
  }
}

.title-container {
  opacity: 0;
  animation: opacity-animation $animate-in-title-duration ease-in-out
    $animate-in-title-time forwards;
}

main {
  opacity: 0;
  animation: opacity-animation $animate-in-main-duration ease-in-out
    $animate-in-main-time forwards;
}

.image-shadow {
  box-shadow: 0.7em 0.7em 2em #000000a6;
}
</style>
