<template>
  <div container-fluid >
    <div class="cursor"></div>
    <div class="nav-button" v-on:click.stop.prevent ="open = !open" v-bind:class="{open:open}">
      <span></span>
      <span></span>
    </div>

    <div class="menu">
      <ul>
        <li> Work</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
    <div class="grid"></div>

    <figure>
    <figcaption>Listen to the T-Rex:</figcaption>
    <audio
        autoplay
        src="@/assets/sound.mp3">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>

    <!-- <div class="banner">
      <video src="@/assets/video.mp4" autoplay muted loop></video>
      <div class="bloc"></div> -->
      <img src="@/assets/img/back3.jpg" alt="back" class="back">

    <div class="title">
      <h2>Welcome to the</h2>
      <h1>Amazon</h1>
      <p>Home of thousand of species</p>
      <button class="btn">Explore</button>
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
    // cursor
    const cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', 'top:' + e.pageY + 'px; left:' + e.pageX + 'px;')
    })

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

    // scene1

    const MainTitle = new TimelineLite()
    MainTitle.to(
      '.back',
      20,
      { scale: 1.2, ease: Power2.easeOut }
    )
    MainTitle.fromTo(
      '.title h1',
      2,
      { opacity: 0, y: -20, ease: Power2.easeOut },
      { opacity: 1, y: 0 },
      '-= 19'
    )
    MainTitle.fromTo(
      '.title h2',
      2,
      { opacity: 0, y: -20, ease: Power2.easeOut },
      { opacity: 1, y: 0 },
      '-= 19'
    )
    MainTitle.to(
      '.title h2',
      2,
      { opacity: 0, y: 20, ease: Power2.easeOut },
      '-= 17'
    )
    MainTitle.to(
      '.title h1',
      2,
      { opacity: 0, y: 20, ease: Power2.easeOut },
      '-= 17'
    )

    MainTitle.fromTo(
      '.title p',
      2,
      { opacity: 0, y: -20, ease: Power2.easeOut },
      { opacity: 1, y: 0 },
      '-= 16'
    )
    MainTitle.fromTo(
      '.title .btn',
      2,
      { opacity: 0, y: -20, ease: Power2.easeOut },
      { opacity: 1, y: 0 },
      '-= 16'
    )

    const controller = new ScrollMagic.Controller()
    new ScrollMagic.Scene({
      triggerElement: 'nav-button'
    })

      .addTo(controller
      )
  }
}
</script>
