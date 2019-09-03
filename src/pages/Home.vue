<template>
  <div container-fluid>
    <div class="cursor"></div>

    <div class="logo">
      <img src="@/assets/img/logo.png" alt />
    </div>
    <div class="nav-button" v-on:click.stop.prevent="open = !open" v-bind:class="{open:open}">
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
    <div class="grid"></div>

    <div id="player">
      <audio id="sound" controls hidden>
        <source src="@/assets/sound.mp3" type="audio/mpeg" />
      </audio>
      <a class="mute"></a>
    </div>

    <img src="@/assets/img/back3.jpg" alt="back" class="back" />

    <div class="title">
      <h2>Welcome to the</h2>
      <h1>Amazon</h1>
      <p>Home of thousand of species</p>
      <button class="explore">Explore</button>
    </div>

    <div class="animal-wrap">
      <div class="parrot animal" data-target="#parrot">
        <img src="@/assets/img/parrot.jpg" alt="Parrot" />
        <p>Parrot blue</p>
      </div>
      <div class="monkey animal">
        <img src="@/assets/img/monkey.jpg" alt="Monkey" />
        <p>Monkey</p>
      </div>
      <div class="tiger animal" data-target="#tiger">
        <img src="@/assets/img/tiger.jpg" alt="Tiger" />
        <p>Tiger</p>
      </div>
      <div class="crocodile animal" data-target="#crocodile">
        <img src="@/assets/img/crocodile.jpg" alt="crocodile" />
        <p>Crococdile</p>
      </div>

      <div class="lizard animal">
        <img src="@/assets/img/lizard.jpg" alt="lizard" />
        <p>Lizard</p>
      </div>
    </div>

    <div class="animal-detail">
      <b-row v-for="(animal,index) in animals" :key="index" v-bind:id="animal.id">
        <b-col cols="6">
          <img :src="animal.picture" />
        </b-col>
        <b-col cols="6">
          <section>
            <h2>{{animal.name}}</h2>
            <p>{{animal.description}}</p>
          </section>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import ScrollMagic from 'scrollmagic'
import { TimelineLite, Expo, Power2 } from 'gsap/TweenMax'
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'

export default {
  data: function () {
    return {
      animals: [
        {
          name: 'parrot',
          id: 'parrot',
          description: 'a bird with feather',
          picture: require('@/assets/img/parrot.jpg')
        },
        {
          name: 'tiger',
          id: 'tiger',
          description: 'a wild tiger',
          picture: require('@/assets/img/tiger.jpg')
        },
        {
          name: 'crocodile',
          id: 'crocodile',
          description: 'a crocodile',
          picture: require('@/assets/img/crocodile.jpg')
        }
      ],
      open: false
    }
  },

  mounted () {
    // audio
    var audioTrack = document.querySelector('#sound')
    var audioControl = document.querySelector('#player .mute')

    function initAudio () {
      audioTrack.volume = 0.05
      audioTrack.muted = false
      audioTrack.loop = true
      audioTrack.play()
    }

    audioControl.addEventListener('click', muteAudio)
    function muteAudio () {
      if (audioTrack.muted) {
        audioTrack.muted = false
        audioControl.classList.remove('muteOn')
      } else {
        audioTrack.muted = true
        audioControl.classList.add('muteOn')
      }
      console.log(audioControl)
    }
    window.addEventListener('load', initAudio)

    // cursor
    const cursor = document.querySelector('.cursor')

    document.addEventListener('mousemove', e => {
      e.preventDefault()
      cursor.setAttribute(
        'style',
        'top:' + e.pageY + 'px; left:' + e.pageX + 'px;'
      )
    })

    //  menu-open
    const navBtn = document.querySelector('.nav-button')
    const userList = document.querySelectorAll('.menu ul li')

    const tl = new TimelineLite({ paused: true })

    tl.to('.menu', 1.1, { height: '100%', ease: Expo.easeInOut })
      .staggerFrom(
        '.menu ul li',
        0.5,
        { y: -100, opacity: 0, ease: Power2.easeOut },
        '-= 1.1'
      )
      .reverse()

    navBtn.addEventListener('click', e => {
      if (tl.isActive()) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      tl.reversed(!tl.reversed())
    })

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

    const MainTitle = new TimelineLite({ onComplete: onComplete })
    const exploreBtn = document.querySelector('.explore')

    MainTitle.to('.back', 10, { scale: 1.2, ease: Power2.easeOut })
      .fromTo(
        '.title h1',
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        '-= 9'
      )
      .fromTo(
        '.title h2',
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        '-= 9'
      )
      .to('.title h2', 2, { opacity: 0, y: 20, ease: Power2.easeOut }, '-= 7')
      .to('.title h1', 2, { opacity: 0, y: 20, ease: Power2.easeOut }, '-= 7')

      .fromTo(
        '.title p',
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        '-= 6'
      )
      .to('.title p', 2, { opacity: 0, y: 20, ease: Power2.easeOut }, '-= 4')
      .fromTo(
        exploreBtn,
        1,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        '-= 3'
      )

    function onComplete () {
      const tl2 = new TimelineLite({ paused: true })
      tl2
        .to(exploreBtn, 1.2, { autoAlpha: 0, y: -20, ease: Expo.easeInOut })
        .to('.back', 2, { scale: 1.1, ease: Expo.easeInOut })
        .from(
          '.animal-wrap',
          2,
          { autoAlpha: 0, y: -20, ease: Expo.easeInOut },
          '-= 0.5'
        )
        .set(exploreBtn, { x: -100, y: 100, z: -20 })
        .reverse()

      exploreBtn.addEventListener('click', e => {
        if (tl2.isActive()) {
          e.preventDefault()
          e.stopPropagation()
          return false
        }
        tl2.reversed(!tl2.reversed())
      })
    }

    const controller = new ScrollMagic.Controller()
    new ScrollMagic.Scene({
      triggerElement: 'nav-button'
    }).addTo(controller)

    // open modal animals

    const covertDetail = document.querySelector('.animal-detail')
    const detailContent = document.querySelectorAll('.animal-detail .row')
    const animalBtn = document.querySelectorAll('.animal')
    const timeDetail = new TimelineLite({ paused: true })

    for (let animalDetail of detailContent) {
      var animalId = animalDetail.getAttribute('id')
    }

    timeDetail
      .from(covertDetail, 1, { autoAlpha: 0 })
      .staggerFrom(
        detailContent,
        1,
        { autoAlpha: 0, scale: 1.2, ease: Power2.easeOut }, "-=0.5"
      )

    animalBtn.forEach(animal => {
      animal.addEventListener('click', e => {
        e.preventDefault()
        var id = animal.getAttribute('data-target')
        console.log(id)
        console.log(animalId)
        if (animalId === id) {
          timeDetail.play()
        } else {
          timeDetail.reverse()
        }
        return false
      })
    })

    window.addEventListener('click', e => {
      if (timeDetail.isActive()) {
        e.preventDefault()
      }
      timeDetail.reversed(!timeDetail.reversed())
    })
  }
}
</script>
