class Rectangle
    constructor:(x = 10, y = 10, w = 10, h = 10) ->
        @x = x
        @y = y
        @w = w
        @h = h

    getCenterX: ->
        return @x + @w / 2

    getCenterY: ->
        return @y + @h / 2

    intersects: (r) ->
        r.x < @x + @w and
        r.y < @y + @h and
        @x < r.x + r.w and
        @y < r.y + r.h
