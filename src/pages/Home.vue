<template>
  <div>
    <h1>hello world</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur eius exercitationem
      iusto facere sapiente iste neque cum dolore sunt laborum ad illum nobis eum quam deserunt?
      Veritatis, dolorum voluptates!
    </p>

<div id="stage">

    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
    <div class="box box4">4</div>
    <div class="box box5">5</div>
    <div class="box box6">6</div>

</div>
  </div>
</template>
<script>

// import {TimelineMax} from 'gsap/TweenMax'
// import ScrollMagic from 'ScrollMagic'
// // import 'ScrollMagicGSAP'

// import 'animation.gsap'
// import 'debug.addIndicators'
// require('animation.gsap');
// require('debug.addIndicators');

// // require('~/nodes_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')
// // require('@/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')

// require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap')

import { TimelineMax } from 'gsap'
import ScrollMagic from 'scrollmagic'
import '~@/plugins/animation.gsap'
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'

// import 'ScrollGsap '

export default {



  mounted () {
    let controller = new ScrollMagic.Controller()

    let tl = new TimelineMax()

    tl.staggerFrom('.box', 1.25, {
      scale: 0,
      cycle: {
        y: [-50, 50]
      },
      stagger: {
        from: 'center',
        amount: 0.25
      }
    })

    new ScrollMagic.Scene({
      triggerElement: '#stage',
      triggerHook: 0
    })

    // .setPin('#stage')
      .setClassToggle('.box1', 'large')
      .setTween(tl)
      .addTo(controller)
  }
}
</script>
