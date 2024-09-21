enum RadioMessage {
    message1 = 49434
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Are you sure you want to crash your MakeCode Arcade?")
    music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    Loop = randint(100, 1e+34)
    for (let index = 0; index < Loop; index++) {
        music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        for (let index = 0; index < randint(1, 999999999999); index++) {
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            console.log("Not enough memory left")
        }
        music.play(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        Loop = randint(1000, 1e+236)
    }
})
let bytes = 0
let Loop = 0
// Create the text sprite with initial text
let textSprite = textsprite.create("Used MBs: 0")
// Manually define estimated sprite dimensions
// Example width; adjust as necessary
let spriteWidth = 80
// Example height; adjust as necessary
let spriteHeight = 16
function centerTextSprite(sprite: TextSprite) {
    // Use MakeCode Arcade screen dimensions
    const screenWidth = 160;
    const screenHeight = 120;

    // Calculate center position
    const x = (screenWidth - spriteWidth) / 2;
    const y = (screenHeight - spriteHeight) / 2;

    // Set sprite position
    sprite.setPosition(x, y);
}
centerTextSprite(textSprite);
// Update text sprite every 500 ms
game.onUpdateInterval(500, function () {
    // Update the text of the existing sprite
    textSprite.setText("Used Memory: " + bytes)
    // Simulate memory usage
    bytes += 1
    // Optional: Scroll background if necessary
    scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyHorizontal)
})
