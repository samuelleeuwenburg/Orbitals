window.requestAnimFrame = window.requestAnimationFrame or
    window.webkitRequestAnimationFrame or
    window.mozRequestAnimationFrame or
    (callback) ->
        window.setTimeout callback, 1000 / 60

game = undefined

init = ->
    game = new Game

mainLoop = ->
    requestAnimFrame mainLoop

    game.inputHandler.update()
    game.update()
    game.render()


document.addEventListener 'DOMContentLoaded', ->
    init()
    mainLoop()
