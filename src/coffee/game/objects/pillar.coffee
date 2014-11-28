class Pillar
    constructor: (x, y) ->

        @spawnDistance = 20
        @spawnRange = 40
        @maxSpawns = 12
        @spawnSpeed = 0.1
        @spawnRate = 120

        @satellites = []
        @rect = new Rectangle x, y, 8, 8
        @color = new Color 255, 0, 0, 0.4

        @spawnDistanceRect = new Rectangle 0, 0, 0, 0
        @spawnRangeRect = new Rectangle 0, 0, 0, 0

        @setAOERect()
        @showAreaOfEffect = false

    setAOERect: ->
        @spawnDistanceRect.x = @rect.x + @rect.w / 2 - @spawnDistance / 2
        @spawnDistanceRect.y = @rect.y + @rect.h / 2 - @spawnDistance / 2
        @spawnDistanceRect.w = @spawnDistance
        @spawnDistanceRect.h = @spawnDistance

        @spawnRangeRect.x = @rect.x + @rect.w / 2 - (@spawnDistance + @spawnRange) / 2
        @spawnRangeRect.y = @rect.y + @rect.h / 2 - (@spawnDistance + @spawnRange) / 2
        @spawnRangeRect.w = @spawnDistance + @spawnRange
        @spawnRangeRect.h = @spawnDistance + @spawnRange


    update: (inputHandler) ->

        if inputHandler.keys[65]
            @showAreaOfEffect = true
        else
            @showAreaOfEffect = false

        for satellite in @satellites
            satellite.update()

        if @satellites.length < @maxSpawns
            dice = Math.floor(Math.random() * @spawnRate)
            if dice < 1
               
                coin = Math.floor(Math.random() * 2)

                if coin == 1
                    x  = Math.floor(Math.random() * @spawnRange) + @spawnDistance
                    y  = Math.floor(Math.random() * @spawnRange) + @spawnDistance
                else 

                    x  = Math.floor(Math.random() * @spawnRange) + @spawnDistance
                    y  = Math.floor(Math.random() * @spawnRange) + @spawnDistance

                x += @rect.x
                y += @rect.y

                @satellites.push new Satellite this, x, y, @spawnSpeed
       

        index = 0
        newSatellites = []

        for satellite in @satellites
            if index == 0
                newSatellites.push satellite
                index++
                continue

            hit = false

            for newSatellite in newSatellites
                if newSatellite.rect.intersects satellite.rect
                    hit = true
                    newSatellite.swallowSatellite satellite

            if not hit
                newSatellites.push satellite
            else

            index++

        @satellites = newSatellites


    render: (graphics) ->
        if @showAreaOfEffect
            graphics.drawCircle @spawnRangeRect, new Color(200, 50, 0, 0.4)
            graphics.drawCircle @spawnDistanceRect, new Color(255, 255, 255, 1)

        graphics.drawCircle @rect, @color

        for satellite in @satellites
            satellite.render(graphics)
