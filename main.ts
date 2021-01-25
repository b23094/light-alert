basic.forever(function () {
    if (input.lightLevel() > 38) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
