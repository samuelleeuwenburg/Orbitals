class Satellite
    constructor: (parent, x = 0, y = 0, speed = 0.2) ->
        @size = 2
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

        if sizeRatio > 1
            @ySpeed = @ySpeed + satellite.speed / (sizeRatio * 2)
            @xSpeed = @xSpeed + satellite.speed / (sizeRatio * 2)
        else
            @ySpeed = satellite.speed + @ySpeed * (sizeRatio / 2)
            @xSpeed = satellite.speed + @xSpeed * (sizeRatio / 2)

        if sizeRatio > 1
            @speed = satellite.speed * 0.8
        else
            @speed = @speed * 0.8


        if sizeRatio > 1
            @rect.w = @rect.w + satellite.rect.w / 8
            @rect.h = @rect.h + satellite.rect.h / 8
        else
            @rect.w = satellite.rect.w + @rect.w / 8
            @rect.h = satellite.rect.h + @rect.h / 8

      
        if @rect.w >= @maxSize
            @rect.w = @maxSize
        if @rect.h >= @maxSize
            @rect.h = @maxSize


    update: ->
        if @rect.x + @rect.w / 2 < @parent.rect.x + @parent.rect.w / 2
            @xSpeed += @speed

        if @rect.x + @rect.w / 2 > @parent.rect.x + @parent.rect.w / 2
            @xSpeed -= @speed

        if @rect.y + @rect.h / 2 < @parent.rect.y + @parent.rect.h / 2
            @ySpeed += @speed

        if @rect.y + @rect.h / 2 > @parent.rect.y + @parent.rect.h / 2
            @ySpeed -= @speed

        @rect.x += @xSpeed
        @rect.y += @ySpeed


    render: (graphics) ->
        graphics.drawCircle @rect, @color
        