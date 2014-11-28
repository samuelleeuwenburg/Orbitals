class Satellite
    constructor: (parent, x = 0, y = 0, speed = 0.2) ->

        @size = 4
        @maxSize = @size * 4

        @rect = new Rectangle x, y, @size, @size
        @color = new Color 255, 100, 0, 1

        @parent = parent

        @speed = speed
        @xSpeed = 0
        @ySpeed = 0

    swallowSatellite: (satellite) ->

        # determine which one is bigger
        sizeRatio = @rect.w / satellite.rect.w

        # Combine directions of both satellites, biggest one is more dominant
        if sizeRatio > 1
            @ySpeed = @ySpeed + satellite.speed / (sizeRatio * 2)
            @xSpeed = @xSpeed + satellite.speed / (sizeRatio * 2)
        else
            @ySpeed = satellite.speed + @ySpeed * (sizeRatio / 2)
            @xSpeed = satellite.speed + @xSpeed * (sizeRatio / 2)

        # slow down
        if sizeRatio > 1
            @speed = satellite.speed / sizeRatio
        else
            @speed = @speed * sizeRatio

        # grow a little bit depending on which one is the biggest
        if sizeRatio > 1
            @rect.w = @rect.w + satellite.rect.w / 8
            @rect.h = @rect.h + satellite.rect.h / 8
        else
            @rect.w = satellite.rect.w + @rect.w / 8
            @rect.h = satellite.rect.h + @rect.h / 8

        # don't exceed maximum size
        if @rect.w >= @maxSize
            @rect.w = @maxSize
        if @rect.h >= @maxSize
            @rect.h = @maxSize


    update: ->
        if @rect.getCenterX() < @parent.rect.getCenterX()
            @xSpeed += @speed

        if @rect.getCenterX() > @parent.rect.getCenterX()
            @xSpeed -= @speed

        if @rect.getCenterY() < @parent.rect.getCenterY()
            @ySpeed += @speed

        if @rect.getCenterY() > @parent.rect.getCenterY()
            @ySpeed -= @speed

        @rect.x += @xSpeed
        @rect.y += @ySpeed


    render: (graphics) ->
        graphics.drawCircle @rect, @color
        
