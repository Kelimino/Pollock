<template>
  <div id="app">
    <svg>
      <circle id="ball" cx="0" cy="0" r="25" />
    </svg>

    <div class="logo">
      <img src="@/assets/img/jackson.png" alt />
    </div>

    <nav class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <div class="scrollbar-track scrollbar-track-y">
      <div class="scrollbar-thumb scrollbar-thumb-y"></div>
    </div>

    <div class="overlay-loader">
      <span></span>
      <span></span>
    </div>

    <div class="overlay-loader2"></div>

    <div class="grid">
      <span></span>
      <span></span>
    </div>

    <div class="social">
      <ul>
        <li>
          <a href>
            <img src="@/assets/icon/fb.svg" alt />
          </a>
        </li>
        <li>
          <a href>
            <img src="@/assets/icon/insta.svg" alt />
          </a>
        </li>
        <li>
          <a href>
            <img src="@/assets/icon/google.svg" alt />
          </a>
        </li>
        <li>
          <a href>
            <img src="@/assets/icon/twitter.svg" alt />
          </a>
        </li>
      </ul>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { TimelineMax, TweenLite, Power2 } from 'gsap/TweenMax'

export default {
  name: 'App',

  methods: {

    enter () {

    },

    leave () {

    }

  },

  mounted () {
    const linkActive = document.querySelectorAll('a')
    const mousActive = document.querySelector('svg')
    console.log(linkActive)

    for (let link of linkActive) {
      link.addEventListener('mouseenter', () => {
        mousActive.classList.toggle('active')
      })
    }

    window.addEventListener('load', introFade())

    function introFade () {
      const introTl = new TimelineMax({})

      const Logo = document.querySelector('.logo')
      const Nav = document.querySelector('.menu')
      const Social = document.querySelector('.social')

      introTl
        .from(Logo, 1, { autoAlpha: 0, y: -50, delay: 3, ease: Power2.easeOut })
        .from(Nav, 1, { autoAlpha: 0, y: -50, ease: Power2.easeOut }, '-= 1.2')
        .from(
          Social,
          1,
          { autoAlpha: 0, y: 50, ease: Power2.easeOut },
          '-= 1.2'
        )
    }

    const ease = 0.15
    const ball = document.querySelector('#ball')
    const pos = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    TweenLite.ticker.addEventListener('tick', update)

    function update () {
      pos.x += (mouse.x - pos.x) * ease
      pos.y += (mouse.y - pos.y) * ease

      ball.setAttribute('cx', pos.x)
      ball.setAttribute('cy', pos.y)
    }

    const Nav = document.querySelector('.menu')
    Nav.addEventListener('mouseenter', () => {
      ball.classList.toggle('hover')
    })

    const tl = new TimelineMax({})
    const overLay = document.querySelector('.overlay-loader')
    const overLay2 = document.querySelector('.overlay-loader2')
    const spanLine = document.querySelectorAll('.overlay-loader span')

    tl.staggerFromTo(
      spanLine,
      3,
      { height: '100vh', autoAlpha: 1 },
      { y: -100, height: 0, autoAlpha: 0, ease: Power2.easeOut }
    )
      .to(
        overLay,
        1.5,
        { y: '-100%', height: 0, delay: 1, ease: Power2.easeinOut },
        '-= 3.4'
      )
      .to(
        overLay2,
        1.5,
        { y: '-100%', height: 0, ease: Power2.easeinOut },
        '-= 2.2'
      )
  }
}
</script>
