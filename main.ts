controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, test, 0, -100)
    music.bigCrash.play()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, test, -100, 0)
    music.bigCrash.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, test, 100, 0)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, test, 0, 100)
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(true)
})
let projectile: Sprite = null
let test: Sprite = null
scene.setBackgroundColor(1)
test = sprites.create(img`
    . . . . . . f f . f . . . . . . 
    . . . . f f f . . f . . . . . . 
    . . . . f . . . . f f . . . . . 
    . . . . f . f . f . f f . . . . 
    . . . . f . . . . . . f . . . . 
    . . . . . f . . . . f f . . . . 
    . . . . . . f f f f f . . . . . 
    . . f f f f . . f . . . . . . . 
    . . . f . f . . f . . . . . . . 
    . . . . . f f f f f f f f f f . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . f f . . f . . . . . . 
    . . . . . . . . . f . . . . . . 
    `, SpriteKind.Player)
let soldier = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 7 7 7 7 7 7 . . . . 
    . . . . . 7 f f f f f 7 . . . . 
    . . . . . 7 f . . . f 7 . . . . 
    . . . . . . f . . . f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . f f f f . 
    . . . . f 7 7 7 7 7 f f . f . . 
    . . . . . . . . 7 . . f . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . 7 . 7 . . . . . . 
    . . . . . . 7 . . . 7 . . . . . 
    . . . . . f . . . . . f . . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(test)
soldier.follow(test, 40)
soldier.setPosition(0, 0)
