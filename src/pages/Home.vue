<template>
  <div>
    <div class="nav-button" v-on:click.stop.prevent ="open = !open" v-bind:class="{open:open}">
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

    <div class="banner">
      <video src="@/assets/video.mp4" autoplay muted loop></video>
      <div class="bloc"></div>

    <div class="title">
      <h1>Hello world</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur eius exercitationem
        iusto facere sapiente iste neque cum dolore sunt laborum ad illum nobis eum quam deserunt?
        Veritatis, dolorum voluptates!
      </p>
    </div>
    </div>

  </div>
</template>
<script>
import ScrollMagic from 'scrollmagic'
import { TimelineLite, Expo, Power2 } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  data () {
    return {
      open: false
    }
  },

  methods: {},
  computed: {},

  mounted () {
    //  menu-open
    const navBtn = document.querySelector('.nav-button')
    const userList = document.querySelectorAll('.menu ul li')

    const tl = new TimelineLite({ paused: true })

    tl.to('.menu', 1.1, { height: '100%', ease: Expo.easeInOut })
    tl.staggerFrom(
      '.menu ul li',
      0.5,
      { y: -100, opacity: 0, ease: Power2.easeOut },
      '-= 1.1'
    )
    tl.reverse()

    navBtn.addEventListener('click', e => {
      if (tl.isActive()) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      tl.reversed(!tl.reversed())
    })

    for (let user of userList) {
      user.addEventListener('mouseover', e => {
      })
    }

    for (let user of userList) {
      user.addEventListener('click', e => {
        if (tl.isActive()) {
          e.preventDefault()
          e.stopPropagation()
          return false
        }
        tl.reversed(!tl.reversed())
        if (navBtn.classList.contains('open')) {
          navBtn.classList.remove('open')
        } else {
          navBtn.classList.add('open')
        }
      })
    }

    // end menu

    const controller = new ScrollMagic.Controller()

    // scene1

    const MainTitle = new TimelineLite()
      .fromTo(
        '.title h1',
        1,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0 }
      )
      .fromTo(
        '.title p',
        1,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0 },
        '-= 0.8'
      )
      .fromTo(
        '.bloc',
        1,
        { opacity: 0, ease: Power2.easeOut },
        { opacity: 1, scale: 1.1, ease: Power2.easeOut },
        '-= 0.3'
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
