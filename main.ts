input.onButtonPressed(Button.AB, function () {
    if (spiel_aktiv != 1) {
        Zufallsseite = randint(1, 2)
        spiel_aktiv = 1
        Zufallszeit = randint(1000, 3000)
        basic.pause(Zufallszeit)
        if (Zufallsseite == 1) {
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
        spiel_aktiv = 1
    }
})
let Zufallsseite = 0
let spiel_aktiv = 0
let Zufallszeit = 0
Zufallszeit = 0
spiel_aktiv = 0
let toggle = 0
Zufallsseite = 0
let gewinnerseite = 0
basic.forever(function () {
    if (spiel_aktiv == 1) {
        if (input.buttonIsPressed(Button.A) && Zufallsseite == 1) {
            soundExpression.happy.playUntilDone()
            toggle = 1
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                `)
            basic.pause(200)
        }
        if (input.buttonIsPressed(Button.A) && Zufallsseite != 1) {
            toggle = 1
            soundExpression.sad.playUntilDone()
            basic.showIcon(IconNames.Confused)
            basic.pause(200)
            basic.pause(200)
        }
        if (input.buttonIsPressed(Button.B) && Zufallsseite == 2) {
            toggle = 1
            soundExpression.happy.playUntilDone()
            basic.showLeds(`
                . # # . .
                . # . # .
                . # # . .
                . # . # .
                . # # . .
                `)
            basic.pause(200)
        }
        if (input.buttonIsPressed(Button.B) && Zufallsseite != 2) {
            toggle = 1
            soundExpression.sad.playUntilDone()
            basic.showIcon(IconNames.Confused)
            basic.pause(200)
            basic.pause(200)
        }
        if (toggle == 1) {
            Zufallsseite = 0
            gewinnerseite = 0
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            spiel_aktiv = 0
            toggle = 0
        }
    }
})
