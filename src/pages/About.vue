<template>
<div container-fluid>


    <div>
             <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur eius exercitationem
          iusto facere sapiente iste neque cum dolore sunt laborum ad illum nobis eum quam deserunt?
          Veritatis, dolorum voluptates!
        </p>

              <div class="content">


        <div class="img-container" data-scrollbar >
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


export default {
  name: 'About',

  data: function () {
    return {}
  },

  mounted () {

  }
}
</script>
