def on_button_pressed_a():
    basic.show_string("0")
    servos.P0.set_angle(0)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("1")
    servos.P0.set_angle(90)
    basic.pause(1000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HAPPY)
basic.pause(1000)
basic.clear_screen()

def on_forever():
    pass
basic.forever(on_forever)
