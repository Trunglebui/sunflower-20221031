// 开机初始化
function left_2 () {
    m = 300
    while (m > 240) {
        m = m - 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, m)
        basic.pause(10)
    }
}
function left_3 () {
    m = 250
    while (m > 190) {
        m = m - 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(10)
    }
}
function left_4 () {
    m = 190
    while (m > 130) {
        m = m - 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(10)
    }
}
function left_5 () {
    m = 240
    while (m < 300) {
        m = m + 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, m)
        basic.pause(10)
    }
}
function left_1 () {
    m = 190
    while (m < 250) {
        m = m + 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(10)
    }
}
function left_6 () {
    m = 130
    while (m < 190) {
        m = m + 1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, m)
        basic.pause(10)
    }
}
let i = 0
let max = 0
let X2Y0 = 0
let X2Y1 = 0
let X1Y1 = 0
let X0Y1 = 0
let X0Y0 = 0
let X1Y0 = 0
let list: number[] = []
let m = 0
led.enable(false)
TM1650.on()
let X = 190
let Y = 250
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, Y)
basic.pause(1000)
// 按键启动追光
basic.forever(function () {
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, X)
    ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, Y)
    if (ModuleWorld_Digatal.Button(ModuleWorld_Digatal.mwDigitalNum.P0P1, ModuleWorld_Digatal.enButton.Press)) {
        list = [
        0,
        1,
        2,
        3,
        4,
        5
        ]
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        basic.pause(200)
        X1Y0 = ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3)
        list[0] = X1Y0
        left_1()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        X0Y0 = ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3)
        list[1] = X0Y0
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 250)
        left_2()
        X0Y1 = ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3)
        list[2] = X0Y1
        left_3()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
        X1Y1 = ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3)
        list[3] = X1Y1
        left_4()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
        X2Y1 = ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3)
        list[4] = X2Y1
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
        left_5()
        X2Y0 = ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3)
        list[5] = X2Y0
        left_6()
        ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
        max = list[0]
        i = 0
        while (i < 6) {
            i = i + 1
            if (list[i] > max) {
                max = list[i]
            }
        }
        basic.pause(500)
        if (list[0] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
            basic.pause(1000)
        } else if (list[1] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 250)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
            basic.pause(1000)
        } else if (list[2] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 250)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
            basic.pause(1000)
        } else if (list[3] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 190)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
            basic.pause(1000)
        } else if (list[4] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 240)
            basic.pause(1000)
        } else if (list[5] == max) {
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P1, 130)
            ModuleWorld_PWM.Servo(ModuleWorld_PWM.mwServoNum.P10, 300)
            basic.pause(1000)
        }
        while (true) {
            if (ModuleWorld_Digatal.Button(ModuleWorld_Digatal.mwDigitalNum.P0P1, ModuleWorld_Digatal.enButton.Press)) {
                control.reset()
            }
        }
    }
})
// 数码管显示光照强度，光照强度为0-1023，并设置摇杆控制时舵机的范围
basic.forever(function () {
    TM1650.showNumber(ModuleWorld_Anaglog.Light(ModuleWorld_Anaglog.mwAnalogNum.AP2P3))
    if (X > 300) {
        X = 300
    } else if (X < 60) {
        X = 60
    } else if (Y > 280) {
        Y = 280
    } else if (Y < 190) {
        Y = 190
    }
})
// 摇杆控制二自由度
basic.forever(function () {
    if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP3P4, ModuleWorld_Anaglog.enRocker.Up)) {
        Y = Y - 1
    } else if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP3P4, ModuleWorld_Anaglog.enRocker.Down)) {
        Y = Y + 1
    } else if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP3P4, ModuleWorld_Anaglog.enRocker.Left)) {
        X = X + 1
    } else if (ModuleWorld_Anaglog.Rocker(ModuleWorld_Anaglog.mwAnalogNum.AP3P4, ModuleWorld_Anaglog.enRocker.Right)) {
        X = X - 1
    }
})
