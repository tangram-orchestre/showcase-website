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

      <main class="mt-24 transition-opacity delay-500 duration-1000">
        <h1
          class="text-center font-['Roboto-Light'] text-[clamp(1rem,6vw,2.2rem)]"
        >
          &lt;coding-in-progress /&gt;
        </h1>
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
    grid-template-columns: 100% 0;
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
