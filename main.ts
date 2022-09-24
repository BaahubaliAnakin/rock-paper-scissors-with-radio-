function rockpaperscissors () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (hand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    radio.sendNumber(hand)
    winCheck()
    hand = 0
    opponenthand = 0
}
function Loss () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    dheerajscore += 1
}
radio.onReceivedNumber(function (receivedNumber) {
    opponenthand = receivedNumber
})
function Win () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    homescore += 1
}
input.onButtonPressed(Button.A, function () {
    radiofrequency += -1
    basic.showNumber(radiofrequency)
})
function winCheck () {
    if (hand == 1 && opponenthand == 2) {
        basic.pause(1000)
        Loss()
    } else if (hand == 2 && opponenthand == 3) {
        basic.pause(1000)
        Loss()
    } else if (hand == 3 && opponenthand == 1) {
        basic.pause(1000)
        Loss()
    } else if (hand == 1 && opponenthand == 3) {
        basic.pause(1000)
        Win()
    } else if (hand == 2 && opponenthand == 1) {
        basic.pause(1000)
        Win()
    } else if (hand == 3 && opponenthand == 2) {
        basic.pause(1000)
        Win()
    } else if (hand == opponenthand) {
        basic.pause(1000)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(radiofrequency)
    basic.showString("Game")
})
radio.onReceivedString(function (receivedString) {
    rockpaperscissors()
    rockpaperscissors2()
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    radiofrequency += 1
    basic.showNumber(radiofrequency)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Rock, Paper, Scissors, Shoot!")
    rockpaperscissors()
    rockpaperscissors2()
    basic.pause(500)
})
function rockpaperscissors2 () {
    opponenthand = randint(1, 3)
    if (opponenthand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (opponenthand == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (opponenthand == 3) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    radio.sendNumber(opponenthand)
    winCheck()
    hand = 0
    opponenthand = 0
}
let radiofrequency = 0
let opponenthand = 0
let hand = 0
hand = 0
opponenthand = 0
basic.showString("Radio")
radiofrequency = 1
basic.showNumber(radiofrequency)
let homescore = 0
let dheerajscore = 0
