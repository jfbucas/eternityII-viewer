## Eternity II viewer

This is the help you can obtain in your web browser's console (F12)

```
=======[ How to use ]================================================================================
The URL takes the following parameters, either as part of the query string or the location hash
  o  puzzle       -> The name of the puzzle
  o  board_w      -> The width of the puzzle
  o  board_h      -> The height of the puzzle
  o  board_edges  -> The edges for all pieces ( a:0, b:1, ... )
  o  board_types  -> The type of each piece (a:None, b:Corner, c:Border, d:Center, e:Fixed) ; Optional
  o  board_pieces -> The piece numbers ; 3 digits integer for each piece ; Optional
  o  board_custom -> A custom text displayed on each space, separated by * (eg:rotation); Optional
  ----
  o  show_conflicts   -> 1 for true else false; Optional
  o  show_piecenumber -> 1 for true else false; Optional
  o  show_piecetype   -> 1 for true else false; Optional
  o  show_coordinates -> 1 for true else false; Optional
====================================================================================================

For example, try to paste:
puzzle=Sample_4x4&board_w=4&board_h=4&board_edges=ajjaajojaetjaaeejoeaootottooeajteojattoootttjajtjeaaoeaeteaejaae&board_pieces=000001002003004005006007008009010011012013014015&board_types=bccbcddccddcbccb


=======[ Functions ]================================================================================
  o  export2c() : will print a C-style array
====================================================================================================

=======[ Shortcuts ]================================================================================
  o  space : toggle the menu
  o    c   : toggle the conflicts
  o    n   : toggle the pieces numbers
  o    t   : toggle the pieces types
  o    s   : toggle the score
  o    #   : toggle the coordinates
  o   1-9  : toggle the tiles
  o    h   : print help
====================================================================================================
```
