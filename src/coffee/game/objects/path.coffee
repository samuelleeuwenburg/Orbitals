class Path
    constructor: (grid) ->
        
        # dummy coordinates
        @coordinates = [
            { row: 2, col: 0, start: true },
            { row: 2, col: 1 },
            { row: 2, col: 2 },
            { row: 2, col: 3 },
            { row: 3, col: 3 },
            { row: 4, col: 3 },
            { row: 5, col: 3 },
            { row: 5, col: 4 },
            { row: 5, col: 5 },
            { row: 5, col: 6 },
            { row: 5, col: 7 },
            { row: 6, col: 7 },
            { row: 7, col: 7 },
            { row: 8, col: 7 },
            { row: 8, col: 8 },
            { row: 8, col: 9 },
            { row: 8, col: 10 },
            { row: 8, col: 11 },
            { row: 8, col: 12, end: true }
        ]

        @color = new Color 0, 200, 160, 0.3

        @pathTiles = []
        @startTile = false
        @endTile = false

        # get all rectangles from the grid
        for coord in @coordinates
            tile = grid.getTile(coord.row, coord.col)

            @pathTiles.push tile

            if coord.start
                @startTile = tile

            if coord.end
                @endTile = tile


    getStart: ->
        return @startTile

    getEnd: ->
        return @endTile

    render: (graphics) ->

        for tile in @pathTiles
            graphics.drawRectangle tile.rect, @color
        
