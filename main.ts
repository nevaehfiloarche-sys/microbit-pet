input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showIcon(IconNames.Happy)
    music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
let timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer == 20) {
        basic.showIcon(IconNames.Sad)
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
    if (timer == 30) {
        basic.showIcon(IconNames.Asleep)
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.UntilDone)
    }
    if (timer == 40) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.UntilDone)
        music.setBuiltInSpeakerEnabled(false)
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
