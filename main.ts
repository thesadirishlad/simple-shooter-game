sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    Player_HP += -1
    if (Player_HP == 0) {
        game.over(false)
    }
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
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
        `, test, 0 * 0, 0)
    music.bigCrash.play()
    pause(200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    Enemy_HP += -1
    if (Enemy_HP == 0) {
        game.over(true)
    }
    pause(500)
})
let projectile: Sprite = null
let test: Sprite = null
let Enemy_HP = 0
let Player_HP = 0
Player_HP = 2
Enemy_HP = 5
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
soldier.follow(test, 25)
soldier.setPosition(0, 0)
