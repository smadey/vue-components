<template>
  <div class="v-scroll-in" v-bind:class="{in: shown}">
    <slot></slot>
  </div>
</template>

<script>
  import { _, $ } from 'ylib';

  import { eventMixin } from './mixins';

  export default {
    mixins: [eventMixin],

    props: {
      threshold: {
        type: Number,
        default: 0,
      },
    },

    data() {
      return {
        shown: false,
      };
    },

    ready() {
      if (this.isInView()) {
        this.shown = true;
      } else {
        this.on(window, 'scroll', _.throttle(this.onScroll, 1000 / 60));
      }
    },

    methods: {
      show() {
        this.shown = true;
      },

      isInView() {
        const $window = $(window);

        const threshold = this.threshold;
        const offsetTop = $(this.$el).offset().top;

        return $window.scrollTop() + $window.height() > offsetTop - threshold;
      },

      onScroll() {
        if (!this.shown && this.isInView()) {
          this.off(window, 'scroll');
          this.show();
        }
      },

    },

  };
</script>

<style lang="sass">
  .v-scroll-in {
    opacity: 0;
    position: relative;
    top: 11px;
    transition: opacity 0.5s, top 0.5s;

    &.in {
      opacity: 1;
      top: 0;
    }
  }
</style>
