<template>
  <div>

      <img src="" alt="logo" class="logo">
      <div class="nav-button">

        <span></span>
        <span></span>
        <span></span>
      </div>

    <div class="menu">
      <ul>
        <li>Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

    <img src="@/assets/img/back.jpg" alt="back" class="back">
    <img src="@/assets/img/logo.png" alt="background">

    <div class="title">
    <h1>Hello world</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur eius exercitationem
      iusto facere sapiente iste neque cum dolore sunt laborum ad illum nobis eum quam deserunt?
      Veritatis, dolorum voluptates!
    </p>

    </div>
  </div>
</template>
<script>
import ScrollMagic from 'scrollmagic'
import { TweenMax } from 'gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
require()

export default {
  mounted () {
    /// menu-open

    let menuOpen = new TweenMax({paused: true})

    menuOpen.to('.menu', 1.6, {

      top: 0,
      ease: Power1.easeInOut

    })

    menuOpen.staggerFrom('.menu ul li', { y: 100, opacity: 0, ease: Power1.easeOut})

    menuOpen.reverse()

    $(document).on('click', '.nav-button', function () {
      menuOpen.reversed(!menuOpen.reversed())
    })

    let controller = new ScrollMagic.Controller()

    // scene1

    let MainTitle = new TweenMax()
    MainTitle
      .staggerFrom('.title h1', 1, { opacity: 0, y: -20 })
      .staggerFrom('.title p', 1, { opacity: 0, y: -20 }, '-=.8')

    new ScrollMagic.Scene({
      triggerElement: '.title',

      offset: 0
    })
      .setTween(MainTitle)
      .addIndicators()
      .addTo(controller)
  }
}
</script>
