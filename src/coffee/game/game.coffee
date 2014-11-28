class Game
    constructor: ->
        @graphics = new Graphics
        @inputHandler = new InputHandler

        @pillars = []
        
    update: ->

        if @inputHandler.mouseState == 0
            console.log 1

            pillar = new Pillar(
                @inputHandler.mouseCoords.x,
                @inputHandler.mouseCoords.y
            )
            
            pillar.spawnDistance = 90
            pillar.spawnRange = 30
            pillar.maxSpawns = 40
            pillar.spawnSpeed = 0.1
            pillar.spawnRate = 10
            pillar.setAOERect()

            @pillars.push pillar
      
 
        for pillar in @pillars
            pillar.update(@inputHandler)


    render: ->
        @graphics.clear()

        for pillar in @pillars
            pillar.render(@graphics)


