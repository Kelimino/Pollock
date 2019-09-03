<template>
  <div container-fluid>

    <div class="overlay-loader">
       <span></span>
      <span></span>
    </div>

    <div class="grid">
      <span></span>
      <span></span>
    </div>

  </div>
</template>
<script>
// import ScrollMagic from 'scrollmagic'
import { TimelineMax, Expo, Power2 } from 'gsap/TweenMax'
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  data: function () {
    return {

    }
  },

  mounted () {
    const tl = new timelineMax()
    const overlay = document.querySelector('.overlay-loader')
    const span = document.querySelector('.overlay-loader span')

    tl.to(overlay, 2, { y: -100, autoAlpha: 0, ease: Expo, Power2})
      .staggerTo(span, 2, { y: -100, height: 0, ease: Expo, Power2})
  }
}
</script>
