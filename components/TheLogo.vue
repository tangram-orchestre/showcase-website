<script setup lang="ts">
import Logo from "~/assets/logo.svg";

const toggle = ref(true);
</script>

<!-- eslint-disable tailwindcss/no-custom-classname -->
<template>
  <div class="outer flex w-full items-center justify-center">
    <div class="flex size-full items-center justify-center bg-lime-300">
      <Logo
        :class="{ 'shape-logo': toggle }"
        class="tangram overflow-visible"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
$opacity_transition_time: 0.5;

.outer {
  height: 40vh;
}

.tangram {
  max-width: 54%;
  max-height: 66%;
  opacity: 1;
  transition: opacity $opacity_transition_time * 1s;
}

.tangram.loading {
  opacity: 0;
}

:deep() {
  .tangram * {
    transform-box: fill-box;
    transform-origin: center;
  }

  .big-triangle-1 {
    fill: #6d9f02;
  }
  .square {
    fill: #81ccb5;
  }
  .big-triangle-2 {
    fill: #ffc303;
  }
  .small-triangle-2 {
    fill: #fe9225;
  }
  .parallelogram {
    fill: #ff5b62;
  }
  .medium-triangle {
    fill: #ffc3cb;
  }
  .small-triangle-1 {
    fill: #ff81ac;
  }

  @mixin kf($name, $transform, $timeOffset) {
    // $offset: translate(
    //   calc(v-bind(xOffset) * 1px),
    //   calc(v-bind(yOffset) * 1px)
    // );
    $offset: translate(0, 35vh);

    .#{$name} {
      transform: $offset;
    }

    .shape-logo {
      $shadow: drop-shadow(10px 10px 30px rgba(0, 0, 0, 0.3));
      $perspective: scale(1.2);

      .#{$name} {
        animation: #{$name}-animation 0.6s ease-in-out forwards;
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

  @mixin anim($list) {
    $time_offset: $opacity_transition_time;
    @each $name, $t in $list {
      @include kf($name, $t, $time_offset + s);
      $time_offset: $time_offset + 0.1;
    }
  }

  @include anim(
    (
      big-triangle-2: translate(-70px, -240px) rotate(90deg),
      small-triangle-2: translate(-70px, -240px) rotate(00deg),
      big-triangle-1: translate(35px, 235px) rotate(-135deg),
      small-triangle-1: translate(263px, -45px),
      medium-triangle: translate(138px, -347px) rotate(45deg),
      parallelogram: translate(13px, 80px) rotateY(180deg),
      square: translate(35px, -192px) rotate(-45deg),
    )
  );
}
</style>
