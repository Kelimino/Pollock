import { Tweenlite } from 'gsap/TweenMax'
Vue.use(Tweenlite)



const ease = 0.15

const ball = document.querySelector('#ball')
const pos = { x: 0, y: 0 }
const mouse = { x: 0, y: 0 }

window.addEventListener('mousemove', e => {
  mouse.x = e.clientX
  mouse.y = e.clientY
})

TweenLite.ticker.addEventListener('tick', update)

function update () {
  pos.x += (mouse.x - pos.x) * ease
  pos.y += (mouse.y - pos.y) * ease

  ball.setAttribute('cx', pos.x)
  ball.setAttribute('cy', pos.y)
}