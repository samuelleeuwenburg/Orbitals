class Tile
    constructor: (tileSize = 10) ->
        @tileSize = tileSize

        @rect = new Rectangle 0, 0, @tileSize, @tileSize
        @hoverColor = new Color 100, 100, 100, 0.2

        @hover = false

    render: (graphics) ->
       if @hover
           graphics.drawRectangle @rect, @hoverColor

