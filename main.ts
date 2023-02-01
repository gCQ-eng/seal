input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("G G G F F G - - ", 292)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # . # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    music.playMelody("G G G F F G - - ", 292)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("G G G F F G - - ", 292)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # . #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("G G G F F G - - ", 292)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("G G G F F G - - ", 292)
    basic.showLeds(`
        . . # . .
        . # . . .
        # . # # #
        . # . . .
        . . # . .
        `)
})
