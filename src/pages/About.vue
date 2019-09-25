<template>
  <div class="viewport" data-scrollbar container-fluid>
    <div class="about">
      <h1>Works</h1>
      <p>
        Some of his best paintings
      </p>

      <div class="content">
        <div class="img-container img1" data-scrollbar>
          <img src="@/assets/img/pol1.jpg" alt />

          <div class="tag"><h2>Jackson Pollock version 1</h2>
          <p>acrylic on canvas 1945</p></div>

        </div>
        <div class="img-container img2">
          <img src="@/assets/img/pol2.jpg" alt />
          <div class="tag"><h2>Jackson Pollock version 2</h2>
          <p>acrylic on canvas 1946</p></div>
        </div>
        <div class="img-container img3">
          <img src="@/assets/img/pol3.jpg" alt />
          <div class="tag"><h2>Jackson Pollock version 3</h2>
          <p>acrylic on canvas 1948</p></div>
        </div>
        <div class="img-container img4">
          <img src="@/assets/img/pol4.jpg" alt />
          <div class="tag"><h2>Jackson Pollock version 4</h2>
          <p>acrylic on canvas 1949</p></div>
        </div>
        <!--  REPEAT  -->
      </div>
    </div>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'
import ScrollMagic from 'scrollmagic'
import { TweenMax, Power2 } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  name: 'About',
  data: function () {
    return {
      isShowing: false
    }
  },

  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  },
  mounted () {
    const scrollEl = document.querySelector('.viewport')
    Scrollbar.init(scrollEl, {
      damping: 0.05,
      continuousScrolling: true
    })

    const controller = new ScrollMagic.Controller()

    let scene = new ScrollMagic.Scene({
      offset: -400,
      triggerElement: '.img1',
      triggerHook: 0,
      duration: '70%'
    })
      .setTween(
        TweenMax.from('.img1 .tag', 2, { autoAlpha: 0, y: -50, ease: Power2.easeinOut })

      )
    scene.addTo(controller)

    let scene1 = new ScrollMagic.Scene({
      offset: -400,
      triggerElement: '.img2',
      triggerHook: 0,
      duration: '70%'
    })
      .setTween(
        TweenMax.from('.img2 .tag', 2, { autoAlpha: 0, y: -50, ease: Power2.easeinOut })

      )
    scene1.addTo(controller)

    let scene2 = new ScrollMagic.Scene({
      offset: -400,
      triggerElement: '.img3',
      triggerHook: 0,
      duration: '70%'
    })
      .setTween(
        TweenMax.from('.img3 .tag', 2, { autoAlpha: 0, y: -50, ease: Power2.easeinOut })

      )
    scene2.addTo(controller)

    let scene3 = new ScrollMagic.Scene({
      offset: -400,
      triggerElement: '.img4',
      triggerHook: 0,
      duration: '70%'
    })
      .setTween(
        TweenMax.from('.img4 .tag', 2, { autoAlpha: 0, y: -20, ease: Power2.easeinOut })

      )
    scene3.addTo(controller)
  }
}
</script>
