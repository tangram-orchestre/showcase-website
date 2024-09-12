<script setup lang="ts">
const items = [
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

const currentImageIndex = ref(0);

const currentImage = (list: string[], index: number) => {
  return index == currentImageIndex.value % list.length;
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
      class="heading mx-auto my-24 grid max-w-4xl justify-items-center ease-in-out"
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
      <div
        class="mt-6 bg-slate-900 px-4 py-12 text-white transition-opacity delay-500 duration-1000"
      >
        <h1
          class="oswald my-8 text-center text-5xl tracking-wider sm:my-8 sm:text-7xl"
        >
          NOS MISSIONS
        </h1>
        <div
          v-for="(item, index) in items"
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
                v-for="(image, imageIndex) in item.images"
                :key="image"
                :src="image"
                :class="{
                  'z-10 opacity-100': currentImage(item.images, imageIndex),
                  'z-0 opacity-0 delay-1000': !currentImage(
                    item.images,
                    imageIndex,
                  ),
                }"
                class="absolute inset-0 rounded-2xl border-2 transition-opacity duration-1000"
              ></NuxtImg>
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
