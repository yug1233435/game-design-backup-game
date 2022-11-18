@namespace
class SpriteKind:
    Enemy2 = SpriteKind.create()
    Enemy3 = SpriteKind.create()
    Enemy4 = SpriteKind.create()
    Enenmy5 = SpriteKind.create()
@namespace
class StatusBarKind:
    EnemyHealth2 = StatusBarKind.create()
    EnemyHealth3 = StatusBarKind.create()
    EnemyHealth4 = StatusBarKind.create()
    EnemyHealth5 = StatusBarKind.create()

def on_overlap_tile(sprite, location):
    global Miniboss, statusbar5
    tiles.set_current_tilemap(tilemap("""
        level9
    """))
    Miniboss = sprites.create(img("""
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
        """),
        SpriteKind.Enenmy5)
    Miniboss.follow(Player1, 150)
    Miniboss.set_position(100, 10)
    statusbar5 = statusbars.create(100, 5, StatusBarKind.EnemyHealth5)
    statusbar5.attach_to_sprite(Miniboss)
    statusbar5.set_color(2, 4)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    tiles.set_tile_at(tiles.get_tile_location(4, 9), sprites.dungeon.hazard_lava1)
    tiles.set_tile_at(tiles.get_tile_location(3, 9), sprites.dungeon.hazard_lava1)
    tiles.set_tile_at(tiles.get_tile_location(3, 8), sprites.dungeon.hazard_lava1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.button_pink,
    on_overlap_tile2)

def on_on_overlap(sprite3, otherSprite):
    statusbar4.value += -10
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Enemy4, on_on_overlap)

def on_overlap_tile3(sprite4, location3):
    tiles.set_current_tilemap(tilemap("""
        level6
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_open_south,
    on_overlap_tile3)

def on_b_pressed():
    global SwordSwung
    SwordSwung = True
    Player1.set_image(img("""
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
    """))
    pause(250)
    Player1.set_image(img("""
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
    """))
    SwordSwung = False
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_on_overlap2(sprite5, otherSprite2):
    if SwordSwung == True:
        statusbar3.value += -2
    else:
        info.change_life_by(-1)
        pause(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Enemy3, on_on_overlap2)

def on_a_pressed():
    global projectile
    pause(2000)
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        Player1,
        100,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile4(sprite6, location4):
    tiles.set_tile_at(tiles.get_tile_location(4, 13), sprites.dungeon.hazard_lava1)
    tiles.set_tile_at(tiles.get_tile_location(3, 12), sprites.dungeon.hazard_lava1)
    tiles.set_tile_at(tiles.get_tile_location(3, 13), sprites.dungeon.hazard_lava1)
    tiles.set_tile_at(tiles.get_tile_location(4, 12), sprites.dungeon.hazard_lava1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_switch_up,
    on_overlap_tile4)

def on_on_overlap3(sprite7, otherSprite3):
    if SwordSwung == True:
        statusbar5.value += -1
    else:
        info.change_life_by(-1)
        pause(200)
sprites.on_overlap(SpriteKind.player, SpriteKind.Enenmy5, on_on_overlap3)

def on_on_overlap4(sprite8, otherSprite4):
    statusbar3.value += -10
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Enemy3, on_on_overlap4)

def on_on_zero(status):
    Skelly2.destroy()
statusbars.on_zero(StatusBarKind.EnemyHealth4, on_on_zero)

def on_on_zero2(status2):
    Skull_Phantom_2.destroy()
statusbars.on_zero(StatusBarKind.EnemyHealth2, on_on_zero2)

def on_on_overlap5(sprite9, otherSprite5):
    statusbar5.value += -5
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Enenmy5, on_on_overlap5)

def on_on_overlap6(sprite10, otherSprite6):
    if SwordSwung == True:
        statusbar4.value += -2
    else:
        info.change_life_by(-1)
        pause(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Enemy4, on_on_overlap6)

def on_on_zero3(status3):
    Skull_Phantom.destroy()
statusbars.on_zero(StatusBarKind.enemy_health, on_on_zero3)

def on_on_zero4(status4):
    Miniboss.destroy()
statusbars.on_zero(StatusBarKind.EnemyHealth5, on_on_zero4)

def on_overlap_tile5(sprite11, location5):
    info.change_life_by(-1)
    pause(100)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile5)

def on_on_overlap7(sprite12, otherSprite7):
    statusbar2.value += -10
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Enemy2, on_on_overlap7)

def on_overlap_tile6(sprite13, location6):
    tiles.set_tile_at(tiles.get_tile_location(2, 14),
        sprites.dungeon.door_open_west)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.button_teal_depressed,
    on_overlap_tile6)

def on_on_overlap8(sprite14, otherSprite8):
    if SwordSwung == True:
        statusbar2.value += -2
    else:
        info.change_life_by(-1)
        pause(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.Enemy2, on_on_overlap8)

def on_overlap_tile7(sprite15, location7):
    tiles.set_tile_at(tiles.get_tile_location(13, 15),
        assets.tile("""
            myTile0
        """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.button_orange,
    on_overlap_tile7)

def on_overlap_tile8(sprite16, location8):
    global Skelly, statusbar3, Skelly2, statusbar4
    tiles.set_current_tilemap(tilemap("""
        level4
    """))
    Skelly = sprites.create(img("""
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
        """),
        SpriteKind.Enemy3)
    Skelly.follow(Player1, randint(95, 100))
    Skelly.set_position(100, 10)
    statusbar3 = statusbars.create(20, 4, StatusBarKind.EnemyHealth3)
    statusbar3.attach_to_sprite(Skelly)
    statusbar3.set_color(2, 4)
    Skelly2 = sprites.create(img("""
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
        """),
        SpriteKind.Enemy4)
    Skelly2.follow(Player1, randint(95, 100))
    Skelly2.set_position(100, 10)
    statusbar4 = statusbars.create(20, 4, StatusBarKind.EnemyHealth4)
    statusbar4.attach_to_sprite(Skelly2)
    statusbar4.set_color(2, 4)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_open_west,
    on_overlap_tile8)

def on_on_zero5(status5):
    Skelly.destroy()
statusbars.on_zero(StatusBarKind.EnemyHealth3, on_on_zero5)

def on_overlap_tile9(sprite17, location9):
    tiles.set_current_tilemap(tilemap("""
        level1
    """))
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_open_north,
    on_overlap_tile9)

def on_on_overlap9(sprite18, otherSprite9):
    statusbar.value += -10
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap9)

def on_on_overlap10(sprite19, otherSprite10):
    if SwordSwung == True:
        statusbar.value += -2
    else:
        info.change_life_by(-1)
        pause(500)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap10)

Skelly: Sprite = None
Skelly2: Sprite = None
projectile: Sprite = None
statusbar3: StatusBarSprite = None
SwordSwung = False
statusbar4: StatusBarSprite = None
statusbar5: StatusBarSprite = None
Miniboss: Sprite = None
statusbar2: StatusBarSprite = None
Skull_Phantom_2: Sprite = None
statusbar: StatusBarSprite = None
Skull_Phantom: Sprite = None
Player1: Sprite = None
game.splash("Welcome to the forest of death soldier your task is to safely escape this forest be warned that countless wretched creatures and mind boggling puzzles await ou")
tiles.set_current_tilemap(tilemap("""
    level2
"""))
Player1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(Player1)
Player1.set_stay_in_screen(True)
scene.camera_follow_sprite(Player1)
pause(1000)
Skull_Phantom = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Skull_Phantom.follow(Player1, randint(95, 100))
Skull_Phantom.set_position(100, 10)
info.set_life(20)
statusbar = statusbars.create(20, 4, StatusBarKind.enemy_health)
statusbar.attach_to_sprite(Skull_Phantom)
statusbar.set_color(2, 4)
Skull_Phantom_2 = sprites.create(img("""
        ........77777...........
            ........7....77.........
            ........7......77.......
            ........7........77.....
            .......77....f.....7....
            .......7....f......7....
            .......7...f.......7....
            ......b7bbbbbbbbbb.7....
            ......7b11111111bb.7....
            ......71f777777f1b.7....
            .....771771777771b77....
            ....77b155ffff151b7.....
            ....7.b1547777471b7.....
            ....77bb11111111bb7.....
            .....77..7711....7......
            .......777711...7.......
            ....b......11......b....
            ffffbb111111111111bbffff
            ....b.....711...7..b....
            .........7.11..77.......
            ........77.11..7........
            ........7.1..1.7........
            ........7.1..1.7........
            ........7.1..1.7........
    """),
    SpriteKind.Enemy2)
Skull_Phantom_2.follow(Player1, randint(95, 100))
Skull_Phantom_2.set_position(100, 10)
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth2)
statusbar2.attach_to_sprite(Skull_Phantom_2)
statusbar2.set_color(2, 4)