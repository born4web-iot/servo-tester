input.onButtonPressed(Button.A, function () {
    basic.showString("0")
    servos.P0.setAngle(0)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("1")
    servos.P0.setAngle(90)
    basic.pause(1000)
    basic.clearScreen()
})
basic.showIcon(IconNames.Happy)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
