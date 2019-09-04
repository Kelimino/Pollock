<template>
  <div id="app" class="preload">

    <svg>
  <circle id="ball" cx="0" cy="0" r="25" />
</svg>

    <div class="logo"><img src="@/assets/img/jackson.png" alt=""></div>

    <nav>
      <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    </nav>

      <div class="social">
    <ul>
      <li><a href=""><img src="@/assets/icon/fb.svg" alt=""></a></li>
      <li><a href=""><img src="@/assets/icon/insta.svg"  alt=""></a></li>
      <li><a href=""><img src="@/assets/icon/google.svg"  alt=""></a></li>
      <li><a href=""><img src="@/assets/icon/twitter.svg"  alt=""></a></li>
    </ul>
  </div>

  <router-view></router-view>

</div>
</template>

<script>

import {TimelineMax, TweenMax, Power2} from 'gsap/TweenMax'

export default {
  name: 'App',

  mounted () {
    const introTl = new TimelineMax({})

    const Logo = document.querySelector('.logo')
    const Menu = document.querySelector('nav')
    const Social = document.querySelector('.social')

    introTl.from(Logo, 1, { autoAlpha: 0, y: -50, delay: 3, ease: Power2.easeOut})
      .from(Menu, 1, { autoAlpha: 0, y: -50, ease: Power2.easeOut}, '-= 1.2')
      .from(Social, 1, { autoAlpha: 0, y: 50, ease: Power2.easeOut}, '-= 1.2')

    Menu.addEventListener('click', e => {
      console.log(e.target)
    })

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
  }
}

</script>

<style>
@import './assets/css/main.scss';
</style>
