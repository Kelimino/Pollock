<template>
  <div>
    <img src alt="logo" class="logo" />
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

    <img src="@/assets/img/back.jpg" alt="back" class="back" />
    <img src="@/assets/img/logo.png" alt="background" />

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
import { TweenMax, TimelineMax, Power1, Elastic, CSSPlugin } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  mounted () {
    /// menu-open
    var navBtn = document.querySelector('.nav-button')

    let tl = new TimelineMax({ paused: true })

    tl.to('.menu', 1.6, { top: 0, ease: Power1.easeInOut })
    tl.staggerFrom('.menu ul li', { y: 100, opacity: 0, ease: Power1.easeOut })
    // tl.reverse()

    navBtn.on('click', (e) => {
      if (tl.isActive()) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    })

    // end menu

    let controller = new ScrollMagic.Controller()

    // scene1

    let MainTitle = new TimelineMax()
    MainTitle.staggerFrom('.title h1', 1, { opacity: 0, y: -20 }).staggerFrom(
      '.title p',
      1,
      { opacity: 0, y: -20 },
      '-=.8'
    )

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
