<script setup lang="ts">
const entering = ref(true);

setTimeout(() => {
  entering.value = false;
}, 1250);
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <Head>
    <Title>Tangram Orchestre</Title>
  </Head>

  <div class="overflow-hidden">
    <div
      class="fixed top-0 z-30 w-full bg-white p-4 text-center text-3xl text-gray-800 shadow-xl"
    >
      TANGRAM
    </div>

    <div class="container mx-auto">
      <div
        class="heading mx-auto mt-24 grid max-w-4xl justify-items-center"
        :class="{ entering }"
      >
        <div class="logo">
          <TheLogo class="size-full" />
        </div>
        <div
          class="flex flex-col items-center justify-center drop-shadow-2xl transition-all duration-1000"
          :class="{ 'opacity-0': entering }"
        >
          <div class="title">TANGRAM</div>
          <div class="sub-title">Orchestre Amateur</div>
        </div>
      </div>
      <div class="m-4 mt-20">
        <button @click="entering = !entering">toggle</button>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed numquam
        placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia eos
        odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
        numquam placeat laboriosam aliquam! Eligendi, ipsum pariatur beatae quia
        eos odit distinctio quod cum rem dolore quo repellat incidunt optio
        esse.
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
    transition: all ease-in-out 0.7s;
  }
}

.title {
  font-size: calc(clamp(1px, 15vw, 90px));
  font-family: "ISOCT";
  font-weight: 1000;
}
.sub-title {
  font-size: calc(clamp(1px, 4vw, 25px));
  font-family: "ISOCT";
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
</style>
