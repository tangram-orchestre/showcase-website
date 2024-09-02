<script setup lang="ts">
const entering = ref(true);
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

    <div class="container mx-auto">
      <div
        class="heading mx-auto mt-32 grid max-w-4xl justify-items-center transition-[grid-template-columns] duration-1000 ease-in-out"
        :class="{ entering }"
      >
        <div class="logo">
          <TheLogo class="size-full" @animation-end="entering = false" />
        </div>
        <div
          class="flex flex-col items-center justify-center pt-4 drop-shadow-2xl transition-opacity duration-1000 lg:pt-0"
          :class="{ 'opacity-0': entering }"
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

      <div
        :class="{ 'opacity-0': entering }"
        class="mt-24 transition-opacity delay-500 duration-1000"
      >
        <h1
          class="text-center font-['Roboto-Light'] text-[clamp(1rem,6vw,2.2rem)]"
        >
          &lt;coding-in-progress /&gt;
        </h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .heading.entering {
    grid-template-columns: 100% 0;
  }

  .heading {
    grid-template-columns: 40% 60%;
    max-width: 950px;
  }
}

.logo {
  min-width: 150px;
  @media (min-width: 300px) {
    height: 180px;
  }
  @media (min-width: 400px) {
    height: 290px;
  }
}
</style>
