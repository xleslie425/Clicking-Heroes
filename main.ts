info.onScore(1000, function () {
    game.setGameOverMessage(true, "YOU WIN")
    game.setGameOverEffect(true, effects.starField)
    game.setGameOverPlayable(true, music.melodyPlayable(music.beamUp), false)
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    mySprite.setImage(assets.image`A static Down`)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(assets.image`A static`)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    projectile = sprites.createProjectileFromSprite(assets.image`Big Star`, mySprite, randint(-100, 100), randint(-50, -100))
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`myImages.image0`)
music.play(music.stringPlayable("D - C - D - E - ", 80), music.PlaybackMode.LoopingInBackground)
game.splash("Press (A) to play!")
music.stopAllSounds()
mySprite = sprites.create(assets.image`A static`, SpriteKind.Player)
mySprite.sayText("Press (A) to Click Me!", 2000, false)
