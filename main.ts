scene.setBackgroundColor(1)
let test = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . f f . . . . . 
    . . . . . . . . f f f . . . . . 
    . . . . . . . f f . f . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . . . . f f f f . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . f f . f . . f f . . . . 
    . . . f f f f f f f f f f f . . 
    . . . f f . . f f . . . . f . . 
    . . f . . . . f f . . . . f . . 
    . . f . . . . f f . . . f f . . 
    . . . f f f f f f f f f . . . . 
    . . . f f . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(test)
