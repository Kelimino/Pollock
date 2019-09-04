<template>
  <div id="app">
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

import { TimelineMax, TweenMax, Power2 } from 'gsap/TweenMax'

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
  }
}

</script>

<style>
@import './assets/css/main.scss';
</style>
