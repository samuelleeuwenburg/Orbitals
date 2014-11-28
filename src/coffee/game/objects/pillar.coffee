class Pillar
    constructor: (tile) ->

        @spawnDistance = 20
        @spawnRange = 40
        @maxSpawns = 12
        @spawnSpeed = 0.1
        @spawnRate = 120

        @satellites = []
        @rect = tile.rect
        @color = new Color 255, 0, 0, 0.2


    update: (inputHandler) ->
    
        # if "a" pressed
        if inputHandler.keys[65]
            @showAreaOfEffect = true
        else
            @showAreaOfEffect = false

        for satellite in @satellites
            satellite.update()

        # spawn new satellites
        if @satellites.length < @maxSpawns
            dice = Math.floor(Math.random() * @spawnRate)
            if dice < 1
               
                range = Math.floor(Math.random() * @spawnRange) + @spawnDistance
                angle = Math.floor(Math.random() * 360)

                x = range * Math.cos angle
                y = range * Math.sin angle

                x += @rect.x
                y += @rect.y

                @satellites.push new Satellite this, x, y, @spawnSpeed
       

        # detect collisions between satellites, needs optimizing
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

        graphics.drawCircle @rect, @color

        for satellite in @satellites
            satellite.render(graphics)
