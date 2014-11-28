class InputHandler
    constructor: () ->
        @keys = {}

        @mouseState = -1
        @mouseReset = false

        @mouseCoords = new Rectangle 0, 0, 1, 1

        @canvas = document.getElementById 'main-canvas'

        window.addEventListener 'keydown', (event) =>
            @keys[event.keyCode] = true

        window.addEventListener 'keyup', (event) =>
            @keys[event.keyCode] = false

        window.addEventListener 'mousedown', (event) =>
            if event.target != @canvas
                return false

            @mouseState = event.button

        window.addEventListener 'mouseup', (event) =>
            @mouseState = -1
            @mouseReset = false

        document.body.onmousemove = (event) =>
            if event.target != @canvas
                return false

            @mouseCoords.x = event.clientX - @canvas.offsetLeft
            @mouseCoords.y = event.clientY - @canvas.offsetTop

    update: ->
        # detect single mouse click
        if @mouseState != -1
            if @mouseReset
                @mouseState = -2
            else
                @mouseReset = true

