<template>
  <div class="viewport" data-scrollbar container-fluid>
    <section class="main row">
      <img src="@/assets/img/jackson.jpg" alt="pollock" />
      <div class="overlayImg"></div>
      <ul>
        <li>American Artist</li>
        <li>Abstract Impressionism</li>
        <li></li>
      </ul>
      <h1>Jackson pollock</h1>
      <h2>12'52</h2>
      <h3>The greatest abstract Artist</h3>
      <div class="scroll">
        Scroll
        <span></span>
      </div>
    </section>

    <section class="second row parallax">
      <div class="back"></div>
      <div class="content">
        <h2>The story of a legend</h2>
        <p>A one of a find artist</p>

        <transition name="leave" mode="in-out">
          <router-link to="/about" @click="active =! active">About</router-link>
         </transition>
      </div>
    </section>
  </div>
</template>
<script>
import ScrollMagic from 'scrollmagic'
import { TimelineMax, TweenMax, Power2 } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'
import Scrollbar from 'smooth-scrollbar'

export default {
  name: 'Home',
  data: function () {
    return {

      active: false
    }
  },

  mounted () {
    const scrollEl = document.querySelector('.viewport')
    Scrollbar.init(scrollEl, {
      damping: 0.05,
      continuousScrolling: true
    })

    const bigTitle = document.querySelector('.main h1')
    const H2 = document.querySelector('.main h2')
    const UL = document.querySelector('.main ul')
    const H3 = document.querySelector('.main h3')
    const Scroll = document.querySelector('.main .scroll')
    const Overlay = document.querySelector('.overlayImg')

    const tl2 = new TimelineMax({})
    tl2
      .fromTo(
        bigTitle,
        1,
        { x: -100, color: '#OOO', autoAlpha: 0, ease: Power2.easeinOut },
        {
          x: 0,
          color: '#FF0000',
          autoAlpha: 1,
          ease: Power2.easeinOut
        }
      )
      .from(H2, 1, { x: +100, autoAlpha: 0, ease: Power2.easeinOut }, '-= 1')
      .from(UL, 1, { y: -100, autoAlpha: 0, ease: Power2.easeinOut }, '-= 1')
      .from(H3, 1, { y: 20, autoAlpha: 0, ease: Power2.easeinOut }, '-= 1')
      .to(Overlay, 1, { x: '100%', ease: Power2.easeinOut }, '-= 1')
      .from(Scroll, 1, { y: 20, autoAlpha: 0, ease: Power2.easeinOut }, '-= 1')

    const controller = new ScrollMagic.Controller()
    const SectionActive = document.querySelector('.main')
    const SectionActive2 = document.querySelector('.second')
    const imgPara = document.querySelector('.second .back')
    const ContenPara = document.querySelector('.second .content')
    const Pollock = document.querySelector('.main img')

    const scene = new ScrollMagic.Scene({
      offset: 100,
      triggerElement: SectionActive,
      triggerHook: 0,
      duration: '100%'
      // reverse: false
    }).setTween(
      TweenMax.to(Pollock, 10, { autoAlpha: 0, y: 200, ease: Power2.easeOut })
    )
    // .addIndicators({
    //   name: 'Main',
    //   color: '#FFOOO'
    // })
    scene.addTo(controller)

    const tlPara = new TimelineMax({})

    tlPara
      .from(ContenPara, 3, { y: -200, autoAlpha: 0, ease: Power2.easeOut })
      .from(
        imgPara,
        2,
        { y: '-50%', scaleX: '1.1', autoAlpha: 0, ease: Power2.easeOut },
        0
      )

    const sceneParallax = new ScrollMagic.Scene({
      offset: 200,
      duration: '100%',
      triggerElement: SectionActive2,
      triggerHook: 200
    }).setTween(tlPara)
    // .addIndicators({
    //   name: 'Second',
    //   color: '#FFOOO'
    // })
    sceneParallax.addTo(controller)
  }
}
</script>
