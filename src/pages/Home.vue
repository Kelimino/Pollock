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
</template>
<script>
import ScrollMagic from 'scrollmagic'
import { TimelineLite, Expo, Power2 } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  mounted () {

    //  menu-open
    const navBtn = document.querySelector('.nav-button')

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

    const menuBack = document.querySelectorAll('.menu')
    const userList = document.querySelectorAll('.menu ul li')

        for ( let user of userList) {
    user.addEventListener('mouseover', e => {
      
      menuBack.css("background-color","red");
      e.preventDefault()
      e.stopPropagation()
      return false
      
      })
        }



    for ( let user of userList) {
    user.addEventListener('click', e => {
      console.log(this)
      if (tl.isActive()) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      tl.reversed(!tl.reversed())
    })
    }

    // end menu



    const controller = new ScrollMagic.Controller()

    // scene1

    const MainTitle = new TimelineLite()
    MainTitle.staggerFrom('.title h1', 1.2, {
      opacity: 0,
      delay: 0.4,
      y: -20
    }).staggerFrom('.title p', 1, { opacity: 0, y: -20 }, '-= 0.8')
    .fromTo('.bloc', 1, { opacity: 0, ease: Power2.easeOut},{opacity:1, scale:1.1, ease: Power2.easeOut}, '-= 0.3')

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
