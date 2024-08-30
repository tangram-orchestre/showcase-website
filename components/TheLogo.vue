<script setup lang="ts">
const toggle = ref(false);
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <button @click="toggle = !toggle">Toggle</button>
  <div class="outer flex w-full items-center justify-center bg-orange-300">
    <div class="inner flex items-center justify-center bg-lime-200">
      <div :class="{ 'shape-logo': toggle }" class="tangram overflow-visible">
        <div class="big-triangle-1" />
        <div class="square" />
        <div class="big-triangle-2" />
        <div class="small-triangle-2" />
        <div class="parallelogram" />
        <div class="medium-triangle" />
        <div class="small-triangle-1" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$opacity_transition_time: 0.5;

.outer {
  height: 70vh;
}

.inner {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  aspect-ratio: 1.2 / 1;
  opacity: 1;
}

.tangram {
  position: relative;
  max-width: 54%;
  max-height: 54%;
  height: 100%;
  aspect-ratio: 1 / 1;
  transform-style: preserve-3d;
  opacity: 1;
}

.tangram div {
  position: absolute;
  transform-box: fill-box;

  width: 100%;
  height: 100%;
}

// TODO: transform origins, correct displacement
.big-triangle-1 {
  background-color: #6d9f02;
  clip-path: polygon(0 0, 100% 0, 50% 50%);
  transform-origin: 50% 25%;
}
.square {
  background-color: #81ccb5;
  clip-path: polygon(50% 50%, 75% 75%, 50% 100%, 25% 75%);
}
.big-triangle-2 {
  background-color: #ffc303;
  clip-path: polygon(100% 0, 100% 100%, 50% 50%);
}
.small-triangle-2 {
  clip-path: polygon(75% 75%, 100% 100%, 50% 100%);
  background-color: #fe9225;
}
.parallelogram {
  background-color: #ff5b62;
  clip-path: polygon(0 0, 25% 25%, 25% 75%, 0 50%);
}
.medium-triangle {
  background-color: #ffc3cb;
  clip-path: polygon(0 50%, 50% 100%, 0 100%);
}
.small-triangle-1 {
  background-color: #ff81ac;
  clip-path: polygon(25% 25%, 50% 50%, 25% 75%);
}

@mixin anim($list) {
  $time_offset: $opacity_transition_time;
  @each $name, $t in $list {
    @include kf($name, $t, $time_offset + s);
    $time_offset: $time_offset + 2;
  }
}

@mixin kf($name, $transform, $timeOffset) {
  $offset: translate(0, 0);
  $animation-length: 2s;
  $animation-delta: 0.1;

  // .#{$name} {
  //   transform: $offset;
  // }

  .shape-logo {
    $shadow: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.3));
    $perspective: translateZ(100px) scale(1.2);

    .#{$name} {
      animation: #{$name}-animation $animation-length ease-in-out forwards;
      animation-delay: $timeOffset;
    }

    @keyframes #{$name}-animation {
      from {
        transform: $offset;
      }
      30% {
        transform: $offset $perspective;
        filter: $shadow;
      }
      80% {
        transform: $transform $perspective;
        filter: $shadow;
      }

      to {
        transform: $transform;
      }
    }
  }
}

@include anim(
  (
    big-triangle-2: translate(10%, 10%),
    small-triangle-2: translate(10%, 10%),
    big-triangle-1: translate(10%, 10%),
    small-triangle-1: translate(10%, 10%),
    medium-triangle: translate(10%, 10%),
    parallelogram: translate(10%, 10%),
    square: translate(10%, 10%),
  )
);
</style>
