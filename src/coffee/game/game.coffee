class Game
    constructor: ->

        @graphics = new Graphics
        @inputHandler = new InputHandler

        @grid = new Grid 40, 40

        @pillars = []
        
    update: ->

        @grid.update(@inputHandler)

        if @inputHandler.mouseState == 0
            if @grid.getHoveredTile()

                pillar = new Pillar @grid.getHoveredTile()
                
                pillar.spawnDistance = 80
                pillar.spawnRange = 30
                pillar.maxSpawns = 10
                pillar.spawnSpeed = 0.1
                pillar.spawnRate = 60
                pillar.setAOERect()

                @pillars.push pillar
      
        for pillar in @pillars
            pillar.update(@inputHandler)

    render: ->
        @graphics.clear()

        @grid.render(@graphics)

        for pillar in @pillars
            pillar.render(@graphics)


