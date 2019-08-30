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
        <li class="link">Work</li>
        <li class="link">About</li>
        <li class="link">Contact</li>
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
import { TimelineLite, Expo, Power2 } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  mounted () {
    /// menu-open
    var navBtn = document.querySelector('.nav-button')
    var linkNav = document.querySelector('.menu ul')

    let tl = new TimelineLite({ paused: true })

    tl.to('.menu', 1.1, { height: '100%', ease: Expo.easeInOut })
    tl.staggerFrom('.menu ul li', 0.5, { y: -100, opacity: 0, ease: Power2.easeOut }, '+=0.5')
    tl.reverse()

    navBtn.addEventListener('click', (e) => {
      if (tl.isActive()) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      tl.reversed(!tl.reversed())
    })

    linkNav.find('li').addEventListener('click', (e) => {
      if (tl.isActive()) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      tl.reversed(!tl.reversed())
    })

    // end menu

    let controller = new ScrollMagic.Controller()

    // scene1

    let MainTitle = new TimelineLite()
    MainTitle.staggerFrom('.title h1', 1.2, { opacity: 0, delay: 0.4, y: -20 }).staggerFrom(
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
