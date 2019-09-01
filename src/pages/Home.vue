<template>
  <div container-fluid>
    <div class="cursor"></div>
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
      <audio id="sound" autoplay controls hidden loop preload="true">
        <source src="@/assets/sound.mp3" type="audio/mpeg" />
      </audio>
      <button type="button">Mute sound</button>
    </div>

    <!-- <div class="banner">
      <video src="@/assets/video.mp4" autoplay muted loop></video>
    <div class="bloc"></div>-->
    <img src="@/assets/img/back3.jpg" alt="back" class="back" />

    <div class="title">
      <h2>Welcome to the</h2>
      <h1>Amazon</h1>
      <p>Home of thousand of species</p>
      <button class="explore">Explore</button>
    </div>

    <div class="animal-wrap">
      <div class="parrot animal">
        <img src="@/assets/img/parrot.jpg" alt="Parrot" />
        <p>Parrot blue</p>
      </div>
      <div class="monkey animal">
        <img src="@/assets/img/monkey.jpg" alt="Monkey" />
        <p>Monkey</p>
      </div>
      <div class="tiger animal">
        <img src="@/assets/img/tiger.jpg" alt="Tiger" />
        <p>Tiger</p>
      </div>
      <div class="crocodile animal">
        <img src="@/assets/img/crocodile.jpg" alt="crocodile" />
        <p>Crococdile</p>
      </div>

      <div class="lizard animal">
        <img src="@/assets/img/lizard.jpg" alt="lizard" />
        <p>Lizard</p>
      </div>
    </div>

    <div class="animal-detail">
      <b-row>
        <b-col cols="6">
          <img src="@/assets/img/parrot.jpg" alt="Parrot" />
        </b-col>
        <b-col cols="6">
          <section>
            <h2>Parrot Blue</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia numquam odio beatae maxime eius quae
              libero aperiam ad corporis nostrum eligendi incidunt quisquam suscipit qui ratione voluptatibus, earum vero?
            </p>
          </section>
          <section>
            <h2>Parrot Blue</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia numquam odio beatae maxime eius quae
              libero aperiam ad corporis nostrum eligendi incidunt quisquam suscipit qui ratione voluptatibus, earum vero?
            </p>
          </section>
          <section>
            <h2>Parrot Blue</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque officia numquam odio beatae maxime eius quae
              libero aperiam ad corporis nostrum eligendi incidunt quisquam suscipit qui ratione voluptatibus, earum vero?
            </p>
          </section>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import ScrollMagic from "scrollmagic";
import { TimelineLite, Expo, Power2 } from "gsap/TweenMax";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";

export default {
  data() {
    return {
      open: false
    };
  },

  mounted() {
    // audio
    document.querySelector("#sound").volume = 0.05;

    // cursor
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", e => {
      cursor.setAttribute(
        "style",
        "top:" + e.pageY + "px; left:" + e.pageX + "px;"
      );
    });

    const animalHover = document.querySelector(".animal-wrap .animal");

    animalHover.addEventListener("mouseenter", e => {
      console.log(cursor);

      cursor.style.width = "100px";
    });

    //  menu-open
    const navBtn = document.querySelector(".nav-button");
    const userList = document.querySelectorAll(".menu ul li");

    const tl = new TimelineLite({ paused: true });

    tl.to(".menu", 1.1, { height: "100%", ease: Expo.easeInOut })
      .staggerFrom(
        ".menu ul li",
        0.5,
        { y: -100, opacity: 0, ease: Power2.easeOut },
        "-= 1.1"
      )
      .reverse();

    navBtn.addEventListener("click", e => {
      if (tl.isActive()) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      tl.reversed(!tl.reversed());
    });

    for (let user of userList) {
      user.addEventListener("click", e => {
        if (tl.isActive()) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        tl.reversed(!tl.reversed());
        if (navBtn.classList.contains("open")) {
          navBtn.classList.remove("open");
        } else {
          navBtn.classList.add("open");
        }
      });
    }

    // end menu

    // scene1

    const MainTitle = new TimelineLite({ onComplete: onComplete });
    const exploreBtn = document.querySelector(".explore");

    MainTitle.to(".back", 12, { scale: 1.2, ease: Power2.easeOut })
      .fromTo(
        ".title h1",
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        "-= 11"
      )
      .fromTo(
        ".title h2",
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        "-= 11"
      )
      .to(".title h2", 2, { opacity: 0, y: 20, ease: Power2.easeOut }, "-= 9")
      .to(".title h1", 2, { opacity: 0, y: 20, ease: Power2.easeOut }, "-= 9")

      .fromTo(
        ".title p",
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        "-= 8"
      )
      .to(".title p", 2, { opacity: 0, y: 20, ease: Power2.easeOut }, "-= 6")
      .fromTo(
        exploreBtn,
        2,
        { opacity: 0, y: -20, ease: Power2.easeOut },
        { opacity: 1, y: 0 },
        "-= 5"
      );

    function onComplete() {
      const tl2 = new TimelineLite({ paused: true });
      tl2
        .to(exploreBtn, 1.2, { autoAlpha: 0, y: -20, ease: Expo.easeInOut })
        .to(".back", 2, { scale: 1.1, ease: Expo.easeInOut })
        .staggerFrom(
          ".animal-wrap",
          2,
          { autoAlpha: 0, y: -20, ease: Expo.easeInOut },
          "-= 0.5"
        )
        .set(exploreBtn, { x: -100, y: 100, z: -20 })
        .reverse();

      exploreBtn.addEventListener("click", e => {
        if (tl2.isActive()) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        tl2.reversed(!tl2.reversed());
      });
    }

    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: "nav-button"
    }).addTo(controller);

    const timeDetail = new TimelineLite({ paused: true });

    const covertDetail = document.querySelector(".animal-detail");
    const detailContent = document.querySelector(".animal-detail .row");
    const animalProfile = document.querySelector(".animal-wrap .animal");

    timeDetail
      .from(covertDetail, 2, { autoAlpha: 0, ease: Power2.easeOut })
      .from(
        detailContent,
        2,
        { autoAlpha: 0, ease: Power2.easeOut },
        " -= 0.5"
      );

    animalProfile.addEventListener("click", function() {
      timeDetail.play();
    });

    window.addEventListener("click", e => {
      console.log(window);
      if (e.target === covertDetail) {
        covertDetail.style.visibility = "hidden";
      }
    });
  }
};
</script>
