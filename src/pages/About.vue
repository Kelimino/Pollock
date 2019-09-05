<template>
  <div class="viewport" data-scrollbar container-fluid>
    <div>
      <h1>About Me</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur eius exercitationem
        iusto facere sapiente iste neque cum dolore sunt laborum ad illum nobis eum quam deserunt?
        Veritatis, dolorum voluptates!
      </p>

      <h3>Let's trigger this here modal!</h3>
      <button @click="toggleShow">
        <span v-if="isShowing">Hide child</span>
        <span v-else>Show child</span>
      </button>
      <div v-if="isShowing" class="modal">
        <p>Hello i am here !</p>
        <button @click="toggleShow">Close</button>
      </div>

      <div class="content">
        <div class="img-container" data-scrollbar>
          <img src="@/assets/img/pol1.jpg" alt />
        </div>
        <div class="img-container">
          <img src="@/assets/img/pol2.jpg" alt />
        </div>
        <div class="img-container">
          <img src="@/assets/img/pol3.jpg" alt />
        </div>
        <div class="img-container">
          <img src="@/assets/img/pol4.jpg" alt />
        </div>
        <!--  REPEAT  -->
      </div>
    </div>
  </div>
</template>

<script>
import Scrollbar from 'smooth-scrollbar'

export default {
  name: 'About',
  data: function () {
    return {
      isShowing: false
    }
  },

  methods: {
    toggleShow () {
      this.isShowing = !this.isShowing
    }
  },
  mounted () {
    const scrollEl = document.querySelector('.viewport')
    Scrollbar.init(scrollEl, {
      damping: 0.05,
      continuousScrolling: true
    })
  }
}
</script>
