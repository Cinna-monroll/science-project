let Positon = 0
for (let index = 0; index < 10; index++) {
    sb.setRgbLedColorRGB(sb.rgbLed(SBRgbLed.RgbLedA), 100, 0, 0)
    basic.pause(500)
    sb.setRgbLedColorRGB(sb.rgbLed(SBRgbLed.RgbLedA), 0, 0, 100)
    basic.pause(100)
}
sb.setRgbLedColorRGB(sb.rgbLed(SBRgbLed.RgbLedA), 0, 0, 0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Positon += -1
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Red))
    } else {
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Violet))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Positon += 1
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Red))
    } else {
        sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Violet))
    }
})
basic.forever(function () {
    game.addScore(Math.constrain(Positon, 0, 100))
    sb.setServoPosition(sb.servo(SBServo.ServoA), Positon)
})
basic.forever(function () {
    sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.White))
    basic.pause(1000)
    sb.setRgbLedColor(sb.rgbLed(SBRgbLed.RgbLedA), sb.color(SBColor.Black))
    basic.pause(1000)
})
basic.forever(function () {
    sb.transitionServoPosition(sb.servo(SBServo.ServoA), 0, 1, sb.easing(SBEasing.Linear))
    sb.transitionServoPosition(sb.servo(SBServo.ServoA), 100, 1, sb.easing(SBEasing.Linear))
})
