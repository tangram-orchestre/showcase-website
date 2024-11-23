<script setup lang="ts">
const currentImageIndex = ref(0);
const carrousel = (list: string[]) => {
  return [
    list[(currentImageIndex.value - 1) % list.length],
    list[currentImageIndex.value % list.length],
    list[(currentImageIndex.value + 1) % list.length],
  ];
};

onMounted(() => {
  useIntervalFn(() => {
    currentImageIndex.value++;
  }, 8000);
});

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
    title: "SE RASSEMBLER EN MUSIQUE",
    message: [
      "Chez Tangram, l’essentiel est de faire de la musique avec <strong>joie et bienveillance</strong>. Chacun·e apporte son énergie et sa sensibilité pour enrichir notre son collectif.",
      "La présence et l'enthousiasme de tous·tes font la différence et contribuent à une <strong>aventure musicale partagée</strong>.",
    ],
    images: ["/images/groupe-a24.jpg"],
    title_classes: ["text-[#81ccb5]"],
  },
];
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div class="bg-slate-900 px-4 py-16 text-white">
    <h1 class="oswald mb-8 text-center text-6xl tracking-wider sm:text-7xl">
      NOS MISSIONS
    </h1>
    <div
      v-for="(mission, index) in missions"
      :key="mission.title"
      class="mx-auto grid max-w-screen-xl grid-cols-1 gap-x-8 gap-y-4 py-10 sm:grid-cols-2"
    >
      <div class="my-auto">
        <h2
          class="lilita-one-regular text-center text-4xl"
          :class="mission.title_classes"
        >
          {{ mission.title }}
        </h2>
        <p
          v-for="paragraph in mission.message"
          :key="paragraph"
          class="raleway my-4 hyphens-auto text-pretty text-justify indent-8 sm:mb-0 sm:mt-4 sm:text-lg"
          lang="fr"
          v-html="paragraph"
        />
      </div>
      <div
        :class="{ 'sm:order-first': index % 2 == 1 }"
        class="flex items-center md:px-2"
      >
        <div
          class="image-shadow relative aspect-video w-full rounded-2xl border-[#ffffff8f]"
        >
          <NuxtPicture
            v-for="(image, imageIndex) in carrousel(mission.images)"
            :key="image"
            :src="image"
            :class="
              imageIndex == 1 ? 'z-10 opacity-100' : 'z-0 opacity-0 delay-1000'
            "
            class="transition-opacity duration-1000"
            :img-attrs="{
              class: 'absolute inset-0 rounded-2xl border-2',
            }"
            placeholder
            quality="70"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-shadow {
  box-shadow: 0.7em 0.7em 2em #000000a6;
}
</style>
