class Creep
    constructor: (path) ->
        @path = path
        @start = @path.getStart()
        @target = @path.getEnd()

        @size = 8

        @rect = new Rectangle @start.rect.getCenterX(), @start.rect.getCenterY(), @size, @size
        @color = new Color 100, 255, 0, 1

        @speed = 0.1
        @velocity = 0.98

        @xSpeed = 0
        @ySpeed = 0


    update: ->
        if @rect.getCenterX() < @target.rect.getCenterX()
            @xSpeed += @speed

        if @rect.getCenterX() > @target.rect.getCenterX()
            @xSpeed -= @speed

        if @rect.getCenterY() < @target.rect.getCenterY()
            @ySpeed += @speed

        if @rect.getCenterY() > @target.rect.getCenterY()
            @ySpeed -= @speed

        @xSpeed *= @velocity
        @ySpeed *= @velocity
        
        @rect.x += @xSpeed
        @rect.y += @ySpeed

        

    render: (graphics) ->
        graphics.drawCircle @rect, @color
