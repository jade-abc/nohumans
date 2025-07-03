const FREQUENCY = 0.1
const AMP = 100
const SPACING = 8
let frames = 0
let recording = false
let freq = 0.1
let phase = 0 
let amp = 100
let spacing = 8
let xOffset = 0
let colors = []
let y = 0
let distortion_timer = 0
let spawn_timer = 0
let DISTORT_TIME = 60
let ys = [200, 300, 400]
let spawnX = 0
let spawnY = 0
function reset_random() 
{
  freq = FREQUENCY
  amp = AMP
  spacing = SPACING
}
function setup() {
  createCanvas(400, 400);
  let c1 = color(255, 208, 0) 
  let c2 = color(208,0,255)
  colors.push(c1)
  colors.push(c2)
}

let txt = "There are no humans here There are no humans here There are no humans here There are no humans here There are no humans here There are no humans here"
function draw() {
  background(0);
  stroke('white')
  let lineX = getRandomArbitrary(0, 400)
  line(lineX, 0, lineX, 400)
  stroke(0, 0)
  phase += 0.03
  let should_distort = getRandomArbitrary(0, 100)
  let should_spawn = getRandomArbitrary(0, 100)
  if (should_spawn > 99) {
    spawn_x = getRandomArbitrary(0, 400)
    spawn_y = getRandomArbitrary(0, 400)
    spawn_timer = getRandomArbitrary(1, 100)
  }
  if(should_distort > 99) {
    distortion_timer = getRandomArbitrary(1, 100)
  }
  for(let i = 0; i < ys.length; i++) 
  {
      for(let j = 0; j < txt.length; j++) 
      {
        y = ys[i] + amp * sin((2 * PI) * freq * ((j / 10) + phase))
        fill(random_item(colors))
        text(txt[j], j  * spacing + xOffset, y)
      }
  }
  if(spawn_timer > 0.1) 
  {
    spawn_timer--
    text("are you complicit?", spawn_x, spawn_y)
  }
  if(distortion_timer > 0.1) 
  {
    distortion_timer--
    freq = FREQUENCY + sin(phase * 0.6) * 0.2
  }
  if(distortion_timer <= 0.1) 
  {
    reset_random()
  }
}
function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
