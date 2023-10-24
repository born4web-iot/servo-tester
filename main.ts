function Servo180_Park_0 () {
    servos.P2.setAngle(0)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    Servo180_Park_0()
})
function Servo180_StepUp () {
    SERVO_180_ANGLE += 0 + SERVO_180_BTN_STEP
    if (SERVO_180_ANGLE > 180) {
        SERVO_180_ANGLE = 180
    }
}
function Servo180_RunTest () {
    basic.clearScreen()
    basic.showString("" + SERVO_180_ANGLE)
    servos.P2.setAngle(SERVO_180_ANGLE)
}
function Servo180_StepDown () {
    SERVO_180_ANGLE += 0 - SERVO_180_BTN_STEP
    if (SERVO_180_ANGLE < 0) {
        SERVO_180_ANGLE = 0
    }
}
input.onButtonPressed(Button.B, function () {
    Servo180_Park_180()
})
function Servo180_Park_180 () {
    servos.P2.setAngle(180)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Servo180_Park_90()
})
function Servo180_SetUp () {
    SERVO_180_ANGLE = 0
    SERVO_180_BTN_STEP = 10
}
function Servo180_Park_90 () {
    servos.P2.setAngle(90)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
}
let SERVO_180_BTN_STEP = 0
let SERVO_180_ANGLE = 0
basic.showIcon(IconNames.Happy)
Servo180_SetUp()
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
	
})
