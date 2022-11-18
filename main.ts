namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enenmy5 = SpriteKind.create()
    export const Enemy6 = SpriteKind.create()
    export const Enemy7 = SpriteKind.create()
}
namespace StatusBarKind {
    export const EnemyHealth2 = StatusBarKind.create()
    export const EnemyHealth3 = StatusBarKind.create()
    export const EnemyHealth4 = StatusBarKind.create()
    export const EnemyHealth5 = StatusBarKind.create()
    export const EnemyHealth6 = StatusBarKind.create()
    export const EnemyHealth7 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level9`)
    game.splash("Skeleton Warrior-You made a mistake coming here and now you will perish")
    Miniboss = sprites.create(img`
        . . . f f f f f f 4 f f f . . . 
        . f f 1 4 5 1 4 4 4 5 4 f f . . 
        . f 4 4 2 2 4 4 5 2 2 4 1 f . . 
        . f 5 5 2 2 4 5 4 2 2 5 4 f . . 
        . f f 4 1 5 4 4 1 4 1 4 f f . . 
        . . f f 4 4 4 5 4 4 4 4 f . . . 
        . . . f f 5 4 1 4 1 5 f f . . f 
        . . . f f f f f f f f f . . f . 
        . . . . . . . f . . . . . f . . 
        . . . f f . . f . . f f f . . . 
        . . f . . f f f f f . . . . . . 
        . f . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f . . . f f . . . . . 
        . . . . f f . . . f f . . . . . 
        `, SpriteKind.Enenmy5)
    Miniboss.follow(Player1, 150)
    Miniboss.setPosition(100, 10)
    statusbar5 = statusbars.create(200, 5, StatusBarKind.EnemyHealth5)
    statusbar5.attachToSprite(Miniboss)
    statusbar5.setColor(2, 4)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonPink, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(4, 9), sprites.dungeon.hazardLava1)
    tiles.setTileAt(tiles.getTileLocation(3, 9), sprites.dungeon.hazardLava1)
    tiles.setTileAt(tiles.getTileLocation(3, 8), sprites.dungeon.hazardLava1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy4, function (sprite, otherSprite) {
    statusbar4.value += -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level6`)
    game.splash("You must choose between the button or the lever one leads you to death the other allows you to proceed further")
    Elf = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . 2 5 2 2 5 2 . . . . . 
        . . . . 2 5 2 2 2 2 5 2 . . . . 
        . d . . 2 7 7 7 7 7 7 2 . . d . 
        . d d . . 7 f 7 7 f 7 . . d d . 
        . . d d d 7 7 7 7 7 7 d d d . . 
        . . . d d 7 f f f f 7 d d . . . 
        . . . . d 7 7 7 7 7 7 d . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 7 5 2 7 . . . . . . 
        . . . . . 7 . 2 5 . 7 . . . . . 
        . . . 2 7 . . 5 2 . . 7 2 . . . 
        . . . 2 2 . . 2 2 . . 2 2 . . . 
        . . . . . . f f f f . . . . . . 
        `, SpriteKind.Enemy6)
    Elf.follow(Player1, randint(85, 90))
    Elf.setPosition(100, 10)
    statusbar6 = statusbars.create(20, 4, StatusBarKind.EnemyHealth6)
    statusbar6.attachToSprite(Elf)
    statusbar.setColor(2, 4)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    SwordSwung = true
    Player1.setImage(img`
        .......ff...............
        ....ffff2ff.............
        ..ffeeeef2ff............
        .ffeeeeef22ff...........
        .feeeeffeeeef...........
        .fffffee2222ef..........
        fffe222ffffe2f..........
        ffffffffeeefff..........
        fefe44ebf44eef..........
        .fee4d4bfddef...........
        ..feee4dddee.c..........
        ...f2222eeddeccccccc....
        ...f444e44ddecddddd.....
        ...fffffeeee.ccccc......
        ..ffffffff...c..........
        ..fff..ff...............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `)
    pause(150)
    Player1.setImage(img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `)
    music.smallCrash.play()
    SwordSwung = false
})
statusbars.onZero(StatusBarKind.EnemyHealth7, function (status) {
    Magma_Monster.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar3.value += -8
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(500)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 . . . . . . . . . 
        . . . . . . . 1 5 . . . . . . . 
        . . . . . . . . 4 5 1 5 4 1 5 4 
        . b . b . b 4 5 1 5 4 b b b b 5 
        . e e e e e e e e e e e e b b 1 
        . b . b . b 5 5 4 5 5 b b b b 4 
        . . . . . . . . 5 4 1 5 5 4 4 5 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Player1, 200, 0)
    music.magicWand.playUntilDone()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(4, 13), sprites.dungeon.hazardLava1)
    tiles.setTileAt(tiles.getTileLocation(3, 12), sprites.dungeon.hazardLava1)
    tiles.setTileAt(tiles.getTileLocation(3, 13), sprites.dungeon.hazardLava1)
    tiles.setTileAt(tiles.getTileLocation(4, 12), sprites.dungeon.hazardLava1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enenmy5, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar5.value += -2
    } else {
        info.changeLifeBy(-5)
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy7, function (sprite, otherSprite) {
    statusbar7.value += -10
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    statusbar3.value += -10
})
statusbars.onZero(StatusBarKind.EnemyHealth4, function (status) {
    Skelly2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy7, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar7.value += -8
    } else {
        info.changeLifeBy(-1)
        pause(100)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth6, function (status) {
    Elf.destroy()
})
statusbars.onZero(StatusBarKind.EnemyHealth2, function (status) {
    Skull_Phantom_2.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enenmy5, function (sprite, otherSprite) {
    statusbar5.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar4.value += -8
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    Skull_Phantom.destroy()
})
statusbars.onZero(StatusBarKind.EnemyHealth5, function (status) {
    Miniboss.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy6, function (sprite, otherSprite) {
    statusbar6.value += -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy6, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar6.value += -8
    } else {
        info.changeLifeBy(-1)
        pause(100)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    statusbar2.value += -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonTealDepressed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(2, 14), sprites.dungeon.doorOpenWest)
    music.bigCrash.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar2.value += -8
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.buttonOrange, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(13, 15), assets.tile`myTile0`)
    music.bigCrash.playUntilDone()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    Skelly = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 5 4 4 4 4 . . . . 
        . . . 4 5 4 4 1 5 5 1 5 4 5 . . 
        . . . 4 b b b b b b b 5 1 4 . . 
        . . 4 4 b 1 1 1 1 1 b 1 5 5 . . 
        . . 5 5 b 1 . f . 1 b 5 1 4 . . 
        . . 4 1 b 1 . . . 1 b 1 4 4 . . 
        . . . 4 b 1 1 1 1 1 b 5 4 . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . 1 . . . 1 . . 1 . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 . . . 1 . . 1 . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        `, SpriteKind.Enemy3)
    Skelly.follow(Player1, randint(85, 90))
    Skelly.setPosition(100, 10)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth3)
    statusbar3.attachToSprite(Skelly)
    statusbar3.setColor(2, 4)
    Skelly2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f f f f . 
        . . . . . f e e f e e f e f . . 
        . . . . . f e e e e e e e f . . 
        . . . . f f f f e e e e e f . . 
        . . . . . . . f f f f f f f . . 
        . . . . . . . . f . . . . . . . 
        . . f . f f . . f . . . . f . . 
        f f f f f f f f f f f f f f f f 
        . . f . . . . . f . . . . f . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . f . f . . . . . . 
        `, SpriteKind.Enemy4)
    Skelly2.follow(Player1, randint(85, 90))
    Skelly2.setPosition(100, 10)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.EnemyHealth4)
    statusbar4.attachToSprite(Skelly2)
    statusbar4.setColor(2, 4)
})
statusbars.onZero(StatusBarKind.EnemyHealth3, function (status) {
    Skelly.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    game.splash("You must choose a button Pink or Aqua one of these will open a doorway allowing you to proceed further the other will leadd you to your doom to activate a butoon go over it with any part of the player body")
    tiles.setCurrentTilemap(tilemap`level1`)
    Magma_Monster = sprites.create(img`
        . . . . . f f . . f f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . f 2 2 2 2 f . . . . . 
        . . . . . . 2 4 5 2 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . 4 2 2 2 2 2 . . . . . 
        . . . 1 4 2 5 4 5 1 5 2 5 . . . 
        . . 5 5 . 2 1 1 5 2 2 . 1 4 . . 
        . . 2 . . . 2 5 2 1 . . . 1 . . 
        . 2 4 . . . 4 2 5 2 . . . 2 5 . 
        . 2 . . . . 5 5 2 2 . . . . 5 . 
        . . . . . . 2 4 4 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 5 2 . . 5 1 . . . . . 
        . . . . 2 1 5 . . 2 4 5 . . . . 
        `, SpriteKind.Enemy7)
    Magma_Monster.follow(Player1, randint(95, 100))
    Magma_Monster.setPosition(100, 10)
    statusbar7 = statusbars.create(20, 4, StatusBarKind.EnemyHealth7)
    statusbar7.attachToSprite(Magma_Monster)
    statusbar.setColor(2, 4)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (SwordSwung == true) {
        statusbar.value += -8
    } else {
        info.changeLifeBy(-1)
        pause(500)
    }
})
let Skelly: Sprite = null
let Skelly2: Sprite = null
let statusbar7: StatusBarSprite = null
let projectile: Sprite = null
let statusbar3: StatusBarSprite = null
let Magma_Monster: Sprite = null
let SwordSwung = false
let statusbar6: StatusBarSprite = null
let Elf: Sprite = null
let statusbar4: StatusBarSprite = null
let statusbar5: StatusBarSprite = null
let Miniboss: Sprite = null
let statusbar2: StatusBarSprite = null
let Skull_Phantom_2: Sprite = null
let statusbar: StatusBarSprite = null
let Skull_Phantom: Sprite = null
let Player1: Sprite = null
game.splash("Act 1")
game.splash("The Forest")
game.splash("Welcome to the forest of death soldier your task is to safely escape this forest be warned that countless wretched creatures and mind boggling puzzles await ye")
game.splash("Look for a open gateway when you load and in to proceed forwards in other secctions")
Player1 = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
controller.moveSprite(Player1)
Player1.setStayInScreen(true)
scene.cameraFollowSprite(Player1)
pause(1000)
Skull_Phantom = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    .........fffff..........
    ........f11111ff........
    .......fb111111bf.......
    .......f1111111dbf......
    ......fd111111dddf......
    ......fd11111ddddf......
    ......fd11dddddddf......
    ......f111dddddddf......
    ......f11fcddddddf......
    .....fb1111bdddbf.......
    .....f1b1bdfcfff........
    .....fbfbffffffff.......
    ......fffffffffff.ff....
    ...........ffffffff.....
    ........f1b1bffffff.....
    ........fbfbffffff......
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Skull_Phantom.follow(Player1, randint(85, 90))
Skull_Phantom.setPosition(100, 10)
info.setLife(50)
statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.attachToSprite(Skull_Phantom)
statusbar.setColor(2, 4)
Skull_Phantom_2 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........11111111........
    ........15454541........
    ........14f45f41........
    ........55554451........
    ........1455f541........
    ........11111511........
    ...........44...........
    ...........51...........
    ...........14...........
    ......114115141515......
    ......415141514151......
    ...........11...........
    ...........45...........
    ...........11...........
    .........51..51.........
    .........14..11.........
    `, SpriteKind.Enemy2)
Skull_Phantom_2.follow(Player1, randint(85, 90))
Skull_Phantom_2.setPosition(100, 10)
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth2)
statusbar2.attachToSprite(Skull_Phantom_2)
statusbar2.setColor(2, 4)
tiles.setCurrentTilemap(tilemap`level2`)
forever(function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
