class Color
    constructor: (r = 0, g = 0, b = 0, a = 1) ->
        @r = r
        @g = g
        @b = b
        @a = a

    getRgba: ->
        "rgba(#{@r}, #{@g}, #{@b}, #{@a})"

