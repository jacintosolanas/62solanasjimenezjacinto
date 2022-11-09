input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    basic.showNumber(randint(0, 10))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    while (true) {
        basic.clearScreen()
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.pause(500)
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.showString("Hola!")
    }
})
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
