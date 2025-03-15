let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . b b b b . . . . . . . 
    . . . . b c b b c b . . . . . . 
    . . . . b c b b c b . . . . . . 
    . . . . b b b b b b . . . . . . 
    . . . . . . b b . . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . . b b b . . . . . . . 
    . . . . . b b b . . . b b . . . 
    . . . . b b b b . . b b b b b . 
    . . . b b b b . . c b b . b b b 
    . . . b b b . . c c c . . . b b 
    . . . b b b . . c c . . . . b b 
    . . . b b b . . . . . . . b b b 
    . . . b b b b b b b b b b b b . 
    . . . . b b b b b b b b b b . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
