/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Desert Dino
@author: Eny
@tags: ["endless"]
@addedOn: 2024-06-23
*/

const playerBL = "a"
const playerBR = "b"
const playerTL = "c"
const playerTR = "d"
const playerBLRun = "e"
const playerBRRun = "f"
const groundOne = "g"
const groundTwo = "h"
const groundThree = "i"
const groundBump = "j"
const largeCactusHigh = "k"
const largeCactusLow = "l"
const smallCactusOneHigh = "m"
const smallCactusOneLow = "n"
const smallCactusTwoHigh = "o"
const smallCactusTwoLow = "p"
const g = "q"
const a = "r"
const m = "s"
const e = "t"
const o = "u"
const v = "v"
const r = "w"
const reset = "x"
const hint = "y"
const birdLeft = "z"
const birdRight = "1"
const birdFlappingLeft = "2"
const birdFlappingRight = "3"

setLegend(
  [ playerBL, bitmap`
........LLLLLLLL
........LLLLLLLL
........LLLLLLLL
........LLLLLLLL
.........LLLLLLL
..........LLLLLL
............LLLL
............LLLL
.............LLL
.............LL.
.............L..
.............LL.
................
................
................
................` ],
  [ playerBR, bitmap`
LLLLLLL.L.......
LLLLLLL.........
LLLLLLL.........
LLLLLLL.........
LLLLLLL.........
LLLLLL..........
LLLLL...........
LLLL............
..LL............
...L............
...L............
...LL...........
................
................
................
................` ],
  [ playerTL, bitmap`
................
................
................
................
................
................
................
................
................
................
................
........L.......
........L.......
........LL......
........LL......
........LLL.....` ],
  [ playerTR, bitmap`
................
.....LLLLLLL....
.....LLLLLLL....
...LLLLLLLLLLL..
...LLL..LLLLLL..
...LLL..LLLLLL..
...LLLLLLLLLLL..
...LLLLLLLLLLL..
...LLLLL........
...LLLLL........
...LLLLLLLLL....
...LLLL.........
..LLLLL.........
..LLLLL.........
.LLLLLL.........
LLLLLLLLL.......` ],
  [ playerBLRun, bitmap`
........LLLLLLLL
........LLLLLLLL
........LLLLLLLL
........LLLLLLLL
.........LLLLLLL
..........LLLLLL
...........LLLLL
............LLLL
.............L..
.............LL.
................
................
................
................
................
................` ],
  [ playerBRRun, bitmap`
LLLLLLL.L.......
LLLLLLL.........
LLLLLLL.........
LLLLLLL.........
LLLLLLL.........
LLLLLL..........
LLLLL...........
LLLL............
...LL...........
................
................
................
................
................
................
................` ],
  [ groundOne, bitmap`
................
................
................
................
................
................
................
................
................
LLLLLLLLLLLLLLLL
................
................
.LL.............
................
........LLLL....
................` ],
  [ groundTwo, bitmap`
................
................
................
................
................
................
................
................
................
LLLLLLLLLLLLLLLL
................
.............LLL
................
................
....L...........
................` ],
  [ groundThree, bitmap`
................
................
................
................
................
................
................
................
................
LLLLLLLLLLLLLLLL
................
................
............LL..
................
................
................` ],
  [ groundBump, bitmap`
................
................
................
................
................
.....LLLLL......
....LL....L.....
..LLL......LL...
LL...........LL.
L.............LL
................
................
................
................
................
................` ],
  [ largeCactusHigh, bitmap`
................
................
................
................
................
.......LL.......
......LLLL......
......LLLL......
......LLLL......
......LLLL......
......LLLL..L...
...L..LLLL.LLL..
..LLL.LLLL.LLL..
..LLL.LLLL.LLL..
..LLL.LLLL.LLL..
..LLL.LLLL.LLL..` ],
  [ largeCactusLow, bitmap`
..LLL.LLLL.LLL..
..LLL.LLLL.LLL..
..LLLLLLLLLLL...
...LLLLLLLLL....
......LLLL......
......LLLL......
......LLLL......
......LLLL......
......LLLL......
......LLLL......
......LLLL......
......LLLL......
................
................
................
................` ],
  [ smallCactusOneHigh, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
.......LL.......
.......LL.......
.......LL.LL....
.......LL.LL....` ],
  [ smallCactusOneLow, bitmap`
....LL.LL.LL....
....LL.LL.LL....
....LL.LL.LL....
....LL.LLLLL....
....LL.LLLL.....
....LLLLL.......
.....LLLL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
................
................
................
................` ],
  [ smallCactusTwoHigh, bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
................
.......LL.......
.....L.LL.......
....LL.LL..L....` ],
  [ smallCactusTwoLow, bitmap`
....LL.LL.LL....
....LLLLL.LL....
.....LLLL.LL....
.......LL.LL....
.......LLLLL....
.......LLLL.....
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
.......LL.......
................
................
................
................` ],
  [ g, bitmap`
................
................
................
.....LLLLLLLL...
.....LLLLLLLL...
...LL...........
...LL...........
...LL....LLLL...
...LL....LLLL...
...LL......LL...
...LL......LL...
.....LLLLLLLL...
.....LLLLLLLL...
................
................
................` ],
  [ a, bitmap`
................
................
................
.....LLLLLL.....
.....LLLLLL.....
...LL......LL...
...LL......LL...
...LL......LL...
...LL......LL...
...LLLLLLLLLL...
...LLLLLLLLLL...
...LL......LL...
...LL......LL...
................
................
................` ],
  [ m, bitmap`
................
................
................
...LL......LL...
...LL......LL...
...LLLL..LLLL...
...LLLL..LLLL...
...LLLLLLLLLL...
...LLLLLLLLLL...
...LL..LL..LL...
...LL..LL..LL...
...LL......LL...
...LL......LL...
................
................
................` ],
  [ e, bitmap`
................
................
................
...LLLLLLLLLL...
...LLLLLLLLLL...
...LL...........
...LL...........
...LLLLLLL......
...LLLLLLL......
...LL...........
...LL...........
...LLLLLLLLLL...
...LLLLLLLLLL...
................
................
................` ],
  [ o, bitmap`
................
................
................
....LLLLLLLL....
...LLLLLLLLLL...
...LL......LL...
...LL......LL...
...LL......LL...
...LL......LL...
...LL......LL...
...LL......LL...
...LLLLLLLLLL...
....LLLLLLLL....
................
................
................` ],
  [ v, bitmap`
................
................
................
...LL......LL...
...LL......LL...
...LLL....LLL...
...LLL....LLL...
....LLL..LLL....
....LLL..LLL....
.....LLLLLL.....
.....LLLLLL.....
......LLLL......
......LLLL......
................
................
................` ],
  [ r, bitmap`
................
................
................
...LLLLLLLL.....
...LLLLLLLL.....
...LL....LL.....
...LL....LL.....
...LLLLLL.......
...LLLLLL.......
...LL..LLLL.....
...LL..LLLL.....
...LL....LL.....
...LL....LL.....
................
................
................` ],
  [ reset, bitmap`
.LLLLLLLLLLLLLL.
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLL2LLLLLLLLL
LLLL2222LL22LLLL
LLL22222LL222LLL
LLL2LL2LLLL22LLL
LLL2LLLLLLL22LLL
LLL2LLLLLLL22LLL
LLL2LLLLLLL22LLL
LLL222222222LLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
.LLLLLLLLLLLLLL.` ],
  [ hint, bitmap`
................
.....L..LLLLL...
....LLL...L.....
...L.L.L..L.....
.....L....L.....
.....L..L.L.....
.....L...L......
................
................
................
................
................
................
................
................
................` ],
  [ birdLeft, bitmap`
.......L........
.......LL.......
.......LLL......
....LL..LLL.....
...LLL..LLLL....
..LLLLL.LLLLL...
.LLLLLL.LLLLLL..
LLLLLLLLLLLLLL..
......LLLLLLLLL.
.......LLLLLLLLL
........LLLLLLLL
.........LLLLLLL
..........LLLLLL
................
................
................` ],
  [ birdRight, bitmap`
................
................
................
................
................
................
................
................
................
LLLLL...........
LL..............
LLLL............
L...............
................
................
................` ],
  [ birdFlappingLeft, bitmap`
....LL..........
...LLL..........
..LLLLL.........
.LLLLLL.........
LLLLLLLLLLLLLL..
......LLLLLLLLL.
.......LLLLLLLLL
........LLLLLLLL
........LLLLLLLL
........LLLLLLLL
........LLLL....
........LLL.....
........LL......
........LL......
........L.......
................` ],
  [ birdFlappingRight, bitmap`
................
................
................
................
................
................
LLLLL...........
LL..............
LLLL............
L...............
................
................
................
................
................
................` ],
)

setSolids([])

let level = 0
const levels = [
  map`
..........
..........
..........
..........
..........
..........
..........
gjighjjhgi`
]

const mapSprites = [groundOne, groundTwo, groundThree, groundBump, largeCactusHigh, largeCactusLow, smallCactusOneHigh, smallCactusOneLow, smallCactusTwoHigh, smallCactusTwoLow, birdLeft, birdRight, birdFlappingLeft, birdFlappingRight]
const evilSprites = [largeCactusHigh, largeCactusLow, smallCactusOneHigh, smallCactusOneLow, smallCactusTwoHigh, smallCactusTwoLow]
const playerSprites = [playerBL, playerBLRun, playerBR, playerBRRun, playerTL, playerTR]
const birdAnimation = {
  "z": "2",
  "1": "3",
  "2": "z",
  "3": "1"
}
const textSprites = [g, a, m, e, o, v, r, reset, hint]

let playerAnimate = 1
let jump = 0
let y = 0
let gap = 15
let difficulty = 1

let gameOver = false
let score = 0

setMap(levels[level])

onInput("w", () => {
  if (y == 0) {
    jump += 2
  }
})

onInput("j", () => {
  if (gameOver) {
    score = 0
    gap = 15
    jump = 0
    let sprites = new Array()
    evilSprites.forEach((s) => {
      sprites = sprites.concat(getAll(s))
    })
    textSprites.forEach((s) => {
      sprites = sprites.concat(getAll(s))
    })
    sprites.forEach((s) => s.remove())
    gameOver = false

    animatePlayer()
    movePlayer()
    gameLoop()
    updateScore()
  }
})

function moveMap() {
  let sprites = new Array()
  mapSprites.forEach((s) => {
    sprites = sprites.concat(getAll(s))
  })
  let p = getFirst(playerBR) || getFirst(playerBRRun)

  sprites.forEach((s) => {
    if (s.x == 0) {
      s.remove()
    }
    s.x -= 1
    if ((evilSprites.indexOf(s.type) >= 0 && s.x == p.x && s.y == p.y - 1) || (Object.keys(birdAnimation).indexOf(s.type) >= 0 && s.x == p.x && (s.y == p.y || s.y == p.y - 1))) {
      gameOver = true

      addSprite(1, 1, g)
      addSprite(2, 1, a)
      addSprite(3, 1, m)
      addSprite(4, 1, e)
      addSprite(2, 2, o)
      addSprite(3, 2, v)
      addSprite(4, 2, e)
      addSprite(5, 2, r)
      addSprite(3, 3, reset)
      addSprite(3, 4, hint)
    }
  })
}

function animatePlayer() {
  if (y == 0) {
    let bl = getFirst(playerBL) || getFirst(playerBLRun)
    let br = getFirst(playerBR) || getFirst(playerBRRun)
    if (playerAnimate == 1) {
      addSprite(bl.x, bl.y, playerBL)
      bl.remove()
      addSprite(br.x, br.y, playerBRRun)
      br.remove()
      playerAnimate = 0
    } else {
      addSprite(bl.x, bl.y, playerBLRun)
      bl.remove()
      addSprite(br.x, br.y, playerBR)
      br.remove()
      playerAnimate = 1
    }
  }

  if (!gameOver) {
    setTimeout(animatePlayer, 150)
  }
}

function animateBirds() {
  let bird = getAll(birdLeft).concat(getAll(birdRight)).concat(getAll(birdFlappingLeft)).concat(getAll(birdFlappingRight))
  
  bird.forEach((s) => {
    addSprite(s.x, s.y, birdAnimation[s.type])
    s.remove()
  })
}

function movePlayer() {
  let sprites = new Array()
  playerSprites.forEach((s) => {
    sprites = sprites.concat(getAll(s))
  })

  if (jump != 0) {
    if (jump > 1) {
      jump -= 1
      y += 1
      sprites.forEach((s) => {
        s.y -= 1
      })
    } else {
      y += 1
      sprites.forEach((s) => {
        s.y -= 1
      })
      jump = 0
      if (!gameOver) {
        setTimeout(movePlayer, 800)
      }
      return
    }
  } else if (y > 0) {
    y -= 1
    sprites.forEach((s) => {
      s.y += 1
    })
  }
  if (!gameOver) {
    setTimeout(movePlayer, 250)
  }
}

function placeEnemies() {
  let rand = Math.random()
  if (rand > 0.6) {
    let amount = Math.floor(Math.random() * 7) + 1
    if (amount < 7) {
      amount = Math.abs(amount - 3)
    } else {
      amount = 3
    }
    
    let count = 0
    for (let x = 0; x < amount; x++) {
      addSprite(10 - amount + x, 6, largeCactusHigh)
      addSprite(10 - amount + x, 7, largeCactusLow)
    }
  } else if (rand > 0.3) {
    let amount = Math.floor(Math.random() * 2) + 1
    
    let count = 0
    for (let x = 0; x < amount; x++) {
      let rand = Math.random() > 0.5
      addSprite(10 - amount + x, 6, rand ? smallCactusOneHigh : smallCactusTwoHigh)
      addSprite(10 - amount + x, 7, rand ? smallCactusOneLow : smallCactusTwoLow)
    }
  } else {
    let height = Math.floor(Math.random() * 3 + 1)
    addSprite(8, 8 - height, birdLeft)
    addSprite(9, 8 - height, birdRight)
  }
}

function updateScore() {
  score += 1
  clearText()
  addText(("000" + score).slice(-5), { x: 14, y: 2, color: color`L` })
  if (score % 125 == 0) {
    difficulty += 0.25
  }

  if (!gameOver) {
    setTimeout(updateScore, 150)
  }
}

function gameLoop() {
  animateBirds()
  moveMap()

  if (gap < Math.max(((14 + Math.floor(Math.random() * 3)) / difficulty), 10)) {
    gap += 1
  } else {
    gap = 0
    placeEnemies()
  }
  
  let val = Math.floor(Math.random() * 7)
  if (val < 7) {
    if (val > 3) {
      val -= 3
    }
  } else {
    val = 4
  }
  addSprite(9, 7, mapSprites[val])
  gap += 1

  if (!gameOver) {
    setTimeout(gameLoop, 250)
  }
}

// spawn player in
addSprite(1, 7, playerBL)
addSprite(2, 7, playerBRRun)
addSprite(1, 6, playerTL)
addSprite(2, 6, playerTR)

animatePlayer()
movePlayer()
gameLoop()
updateScore()
