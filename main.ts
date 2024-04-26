input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() < 20) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            `)
    }
    if (input.lightLevel() >= 20 && input.lightLevel() < 80) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (input.lightLevel() >= 80 && input.lightLevel() < 110) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
    if (input.lightLevel() >= 110 && input.lightLevel() < 160) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.lightLevel() >= 160 && input.lightLevel() < 210) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.lightLevel() >= 160 && input.lightLevel() < 210) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (input.lightLevel() >= 210 && input.lightLevel() < 300) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
