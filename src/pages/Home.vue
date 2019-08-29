<template>
  <div class ="title">
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
import ScrollMagic from 'scrollmagic'
import { TimelineMax } from 'gsap'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {

  mounted () {
    var controller = new ScrollMagic.Controller()

    // // title animation

    // var MainTitle = new TimelineMax()

    // MainTitle.from('.title h1', 2,{
    //   opacity:0,
    //   y: -20

    // })
    // MainTitle.from('.title p', 2,{
    //   delay: 0.5,
    //   opacity:0,
    //   y: -20

    // })

    //   new ScrollMagic.scene({
    //   triggerElement: '.title',
    //   triggerHook:0,
    //   offset:0,

    // })
    // .setTween(MainTitle)
    // .addIndicators()
    // .addTo(controller)

    // box elements animation
    var tl = new TimelineMax()

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
      triggerHook: 0,
      offset: -100,
      duration: 30
    })

      .setPin('#stage')
      .setClassToggle('.box1', 'large')
      .setTween(tl)
      .addTo(controller)
      .addIndicators()
  }
}
</script>
