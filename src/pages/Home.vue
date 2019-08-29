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
import * as ScrollMagic from 'scrollmagic' // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TimelineMax } from 'gsap' // Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, TimelineMax)


export default {


  mounted () {



    var controller = new ScrollMagic.Controller()

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
      triggerHook: 0
    })

    // .setPin('#stage')
      .setClassToggle('.box1', 'large')
      .setTween(tl)
      .addTo(controller)
  }
}
</script>
