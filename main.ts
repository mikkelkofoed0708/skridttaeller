input.onButtonPressed(Button.A, function () {
    basic.showNumber(Skridt)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Skridt = 0
})
let Skridt = 0
Skridt = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 1500) {
        Skridt += 1
    }
})
