class Game
    constructor: ->

        @graphics = new Graphics
        @inputHandler = new InputHandler

        @grid = new Grid 40, 40

        @path = new Path @grid

        @pillars = []
        
    update: ->

        @grid.update(@inputHandler)

        if @inputHandler.mouseState == 0
            if @grid.getHoveredTile()

                pillar = new Pillar @grid.getHoveredTile()
                
                pillar.spawnDistance = 30
                pillar.spawnRange = 40
                pillar.maxSpawns = 2
                pillar.spawnSpeed = 0.1
                pillar.spawnRate = 100

                @pillars.push pillar
      
        for pillar in @pillars
            pillar.update @inputHandler

    render: ->
        @graphics.clear()

        @path.render @graphics

        for pillar in @pillars
            pillar.render @graphics

        @grid.render @graphics


