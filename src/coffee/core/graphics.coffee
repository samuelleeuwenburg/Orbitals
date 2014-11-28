class Graphics
    constructor: ->
        @canvas = document.getElementById 'main-canvas'
        @context = @canvas.getContext '2d'

    clear: ->
        @context.clearRect 0, 0, @canvas.width, @canvas.height

    drawRectangle: (rect, color) ->
        @context.fillStyle = color.getRgba()
        @context.fillRect rect.x, rect.y, rect.w, rect.h

    drawCircle: (rect, color) ->
        centerX = rect.x + rect.w / 2
        centerY = rect.y + rect.h / 2
        radius = (rect.w + rect.h) / 4

        @context.beginPath()
        @context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        @context.fillStyle = color.getRgba()
        @context.fill()
        
