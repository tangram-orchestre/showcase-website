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
      class="navbar fixed top-0 z-30 w-full bg-white p-4 text-center text-3xl text-gray-800 shadow-xl"
    >
      TANGRAM
    </div>

    <div class="container mx-auto">
      <div
        class="heading mx-auto mt-32 grid max-w-4xl justify-items-center"
        :class="{ entering }"
      >
        <div class="logo">
          <TheLogo class="size-full" @animation-end="entering = false" />
        </div>
        <div
          class="flex flex-col items-center justify-center pt-4 drop-shadow-2xl transition-all duration-1000 lg:pt-0"
          :class="{ 'opacity-0': entering }"
        >
          <div class="title">TANGRAM</div>
          <div class="sub-title">Orchestre Amateur</div>
        </div>
      </div>

      <div
        :class="{ 'opacity-0': entering }"
        class="mt-24 transition-all delay-500 duration-1000"
      >
        <h1 class="wip fixed bottom-36 text-center text-4xl">
          &lt;coding-in-progress /&gt;
        </h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  font-family: "Roboto-Light";
}

@media (min-width: 1024px) {
  .heading.entering {
    grid-template-columns: 100% 0;
  }

  .heading {
    grid-template-columns: 40% 60%;
    max-width: 950px;
  }
}

.heading {
  transition: grid-template-columns ease 1s;
}

.title {
  font-size: calc(clamp(1px, 15vw, 90px));
  font-family: "Roboto-Thin";
  line-height: 100px;
}
.sub-title {
  font-size: calc(clamp(1px, 4vw, 25px));
  font-family: "Oswald";
  letter-spacing: 0.084em;
}

.logo {
  min-width: 150px;
  @media (min-width: 300px) {
    height: 180px;
  }
  @media (min-width: 400px) {
    height: 250px;
  }
}

.wip {
  font-family: "Roboto-Light";
  transform: translate(calc(50vw - 50%));
  left: 0;
}
</style>
