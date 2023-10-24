def on_button_pressed_a():
    Servo180_StepDown()
input.on_button_pressed(Button.A, on_button_pressed_a)

def Servo180_StepUp():
    global SERVO_180_ANGLE
    SERVO_180_BTN_STEP = 0
    SERVO_180_ANGLE += 0 + SERVO_180_BTN_STEP
    if SERVO_180_ANGLE > 180:
        SERVO_180_ANGLE = 180
def Servo180_RunTest():
    basic.show_string("" + str(SERVO_180_ANGLE))
    servos.P0.set_angle(SERVO_180_ANGLE)
def Servo180_StepDown():
    global SERVO_180_ANGLE
    SERVO_180_BTN_STEP2 = 0
    SERVO_180_ANGLE += 0 - SERVO_180_BTN_STEP2
    if SERVO_180_ANGLE < 0:
        SERVO_180_ANGLE = 0

def on_button_pressed_b():
    Servo180_StepUp()
input.on_button_pressed(Button.B, on_button_pressed_b)

def Servo180_SetUp():
    global SERVO_180_ANGLE
    SERVO_180_ANGLE += 10
    SERVO_180_ANGLE = 0
SERVO_180_ANGLE = 0
basic.show_icon(IconNames.HAPPY)
basic.pause(1000)
basic.clear_screen()
Servo180_SetUp()

def on_forever():
    Servo180_RunTest()
basic.forever(on_forever)
