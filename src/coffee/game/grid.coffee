class Grid
    
    constructor: (w = 10, h = 10, x = 0, y = 0) ->
        @w = w
        @h = h
        @x = x
        @y = y

        @tileSize = 32

        @tiles = []

        for row in [0..@w]
            @tiles[row] = []

            for col in [0..@h]
                @tiles[row].push new Tile @tileSize

        @calculateGridPositions()


    calculateGridPositions: ->

        for row in [0..@w]
            for col in [0..@h]

                tile = @tiles[row][col]
                tile.rect.y = tile.rect.h * row
                tile.rect.x = tile.rect.w * col

    getTile: (row, col) ->
        return @tiles[row][col]

    getAllTiles: ->
    
        arr = []
        for row in [0..@w]
            for col in [0..@h]
                arr.push @tiles[row][col]

        return arr

    getHoveredTile: ->
        for tile in @getAllTiles()
            if tile.hover
                return tile

        return false

    update: (inputHandler) ->
    
        for tile in @getAllTiles()
            if inputHandler.mouseCoords.intersects tile.rect
                tile.hover = true
            else
                tile.hover = false

    render: (graphics) ->

        for tile in @getAllTiles()
            tile.render(graphics)
        
        
