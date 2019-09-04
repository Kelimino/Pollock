<template>
  <div class="viewport">
    <div id="scroll-container" class="scroll-container">
      <div class="content">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, pariatur eius exercitationem
          iusto facere sapiente iste neque cum dolore sunt laborum ad illum nobis eum quam deserunt?
          Veritatis, dolorum voluptates!
        </p>

        <div class="img-container">
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

       <div class="img-container">
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

<div class="img-container">
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

  data: function() {
    return{

    }
  },

mounted(){


var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.05, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true
});

window.addEventListener("load", onLoad);

function onLoad() {    
  updateScroller();  
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll); 
}

function updateScroller() {
  
  var resized = scroller.resizeRequest > 0;
    
  if (resized) {    
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }
      
  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }
  
  TweenLite.set(scroller.target, { 
    y: -scroller.y 
  });
  
  requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}


  }
}
</script>
