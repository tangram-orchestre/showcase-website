<script setup lang="ts">
const items = [
  {
    title: "Découvrir la direction",
    message:
      "Chez Tangram, nous croyons à la démocratisation de l’<strong>art de la direction d’orchestre</strong>. Notre ensemble offre des opportunités uniques aux musicien·ne·s amateur·e·s de monter sur le podium et d'<strong>explorer</strong> les rôles de chef·fe d’orchestre et d’arrangeur·euse. À travers des <strong>ateliers</strong>, des sessions spéciales et des <strong>projets semestriels</strong>, chacun·e peut découvrir la joie de diriger un orchestre.",
    image: "/images/cc-chef.png",
  },
  {
    title: "Impliquer le public",
    message:
      "Nous souhaitons rapprocher les musicien·ne·s et le public en démystifiant les rôles de chef·fe d’orchestre et d’arrangeur·euse. À travers des présentations de concert enrichissantes et des clés d’écoute, nous invitons le public à voir, entendre et comprendre plus profondément le processus de création musicale.",
    image: "/images/cc-chef.png",
  },
  {
    title: "Valoriser la qualité musicale",
    message:
      "Chez Tangram, la qualité musicale est primordiale, mais notre engagement pour une exploration musicale inclusive l’est tout autant. Que vous soyez ici pour affiner votre jeu ou pour explorer la direction et l’arrangement, notre ensemble valorise la contribution de chaque membre. Nous équilibrons excellence musicale et esprit d’apprentissage, créant ainsi une ambiance dynamique et enrichissante.",
    image: "/images/cc-chef.png",
  },
];
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <Head>
    <Title>Tangram Orchestre</Title>
  </Head>

  <div class="min-h-screen overflow-hidden">
    <div
      class="fixed top-0 z-30 w-full bg-white p-4 text-center font-['Roboto-Light'] text-3xl text-gray-800 shadow-xl"
    >
      TANGRAM
    </div>

    <div class="container mx-auto px-4">
      <div
        class="heading mx-auto mt-32 grid max-w-4xl justify-items-center ease-in-out"
      >
        <div class="logo">
          <TheLogo class="size-full" />
        </div>
        <div
          class="title-container flex flex-col items-center justify-center pt-4 drop-shadow-2xl transition-opacity duration-1000 lg:pt-0"
        >
          <div
            class="title font-['Roboto-Thin'] text-[calc(clamp(1px,15vw,6rem))] leading-[1.067em]"
          >
            TANGRAM
          </div>
          <div
            class="sub-title text-center font-['Oswald'] text-[calc(clamp(1px,3vw,1.3rem))] tracking-wide"
          >
            Orchestre amateur pour Chef⸱fe⸱s en herbe
          </div>
        </div>
      </div>

      <main
        class="mx-auto mt-24 max-w-screen-lg transition-opacity delay-500 duration-1000"
      >
        <template v-for="(item, index) in items" :key="item.message">
          <div class="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div class="">
              <h1 class="font-['Roboto-Light'] text-2xl">
                {{ index + 1 }}. {{ item.title }}
              </h1>
              <p
                class="mt-2 text-justify tracking-wide"
                v-html="item.message"
              ></p>
            </div>
            <NuxtImg
              :class="{ 'lg:order-first': index % 2 == 1 }"
              :src="item.image"
              class="w-full rounded-2xl drop-shadow-lg"
            ></NuxtImg>
          </div>
        </template>
      </main>
    </div>
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
</style>
