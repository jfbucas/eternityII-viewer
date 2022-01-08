
puzzles[ nb_puzzles ] = "brendan/pieces_20x04.txt.js,Brendan 20x04".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_20x04.txt.js" ) {

board_w = 20;
board_h = 4;


pieces[ p ] = "0,0,1,3".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,4,2".split( splitreg ); p++;
pieces[ p ] = "0,0,5,4".split( splitreg ); p++;
pieces[ p ] = "0,1,6,1".split( splitreg ); p++;
pieces[ p ] = "0,1,7,2".split( splitreg ); p++;
pieces[ p ] = "0,1,7,4".split( splitreg ); p++;
pieces[ p ] = "0,1,8,5".split( splitreg ); p++;
pieces[ p ] = "0,1,10,3".split( splitreg ); p++;
pieces[ p ] = "0,1,10,5".split( splitreg ); p++;
pieces[ p ] = "0,1,11,1".split( splitreg ); p++;
pieces[ p ] = "0,1,11,4".split( splitreg ); p++;
pieces[ p ] = "0,2,7,5".split( splitreg ); p++;
pieces[ p ] = "0,2,8,3".split( splitreg ); p++;
pieces[ p ] = "0,2,10,2".split( splitreg ); p++;
pieces[ p ] = "0,2,11,3".split( splitreg ); p++;
pieces[ p ] = "0,2,12,1".split( splitreg ); p++;
pieces[ p ] = "0,2,12,3".split( splitreg ); p++;
pieces[ p ] = "0,2,13,4".split( splitreg ); p++;
pieces[ p ] = "0,2,13,5".split( splitreg ); p++;
pieces[ p ] = "0,3,7,3".split( splitreg ); p++;
pieces[ p ] = "0,3,8,2".split( splitreg ); p++;
pieces[ p ] = "0,3,8,4".split( splitreg ); p++;
pieces[ p ] = "0,3,9,1".split( splitreg ); p++;
pieces[ p ] = "0,3,11,4".split( splitreg ); p++;
pieces[ p ] = "0,3,11,5".split( splitreg ); p++;
pieces[ p ] = "0,3,12,4".split( splitreg ); p++;
pieces[ p ] = "0,3,12,5".split( splitreg ); p++;
pieces[ p ] = "0,3,13,2".split( splitreg ); p++;
pieces[ p ] = "0,4,6,2".split( splitreg ); p++;
pieces[ p ] = "0,4,7,2".split( splitreg ); p++;
pieces[ p ] = "0,4,8,1".split( splitreg ); p++;
pieces[ p ] = "0,4,9,1".split( splitreg ); p++;
pieces[ p ] = "0,4,9,2".split( splitreg ); p++;
pieces[ p ] = "0,4,9,4".split( splitreg ); p++;
pieces[ p ] = "0,4,10,1".split( splitreg ); p++;
pieces[ p ] = "0,4,12,1".split( splitreg ); p++;
pieces[ p ] = "0,5,7,5".split( splitreg ); p++;
pieces[ p ] = "0,5,8,3".split( splitreg ); p++;
pieces[ p ] = "0,5,9,4".split( splitreg ); p++;
pieces[ p ] = "0,5,11,3".split( splitreg ); p++;
pieces[ p ] = "0,5,11,5".split( splitreg ); p++;
pieces[ p ] = "0,5,12,2".split( splitreg ); p++;
pieces[ p ] = "0,5,12,3".split( splitreg ); p++;
pieces[ p ] = "6,6,7,7".split( splitreg ); p++;
pieces[ p ] = "6,6,7,13".split( splitreg ); p++;
pieces[ p ] = "6,6,8,9".split( splitreg ); p++;
pieces[ p ] = "6,7,8,13".split( splitreg ); p++;
pieces[ p ] = "6,7,13,9".split( splitreg ); p++;
pieces[ p ] = "6,8,9,10".split( splitreg ); p++;
pieces[ p ] = "6,8,13,11".split( splitreg ); p++;
pieces[ p ] = "6,9,6,12".split( splitreg ); p++;
pieces[ p ] = "6,9,8,13".split( splitreg ); p++;
pieces[ p ] = "6,9,10,8".split( splitreg ); p++;
pieces[ p ] = "6,9,12,12".split( splitreg ); p++;
pieces[ p ] = "6,10,12,10".split( splitreg ); p++;
pieces[ p ] = "6,11,7,7".split( splitreg ); p++;
pieces[ p ] = "6,11,10,7".split( splitreg ); p++;
pieces[ p ] = "6,12,9,7".split( splitreg ); p++;
pieces[ p ] = "6,12,10,11".split( splitreg ); p++;
pieces[ p ] = "6,12,11,7".split( splitreg ); p++;
pieces[ p ] = "6,13,9,12".split( splitreg ); p++;
pieces[ p ] = "7,7,13,9".split( splitreg ); p++;
pieces[ p ] = "7,9,8,9".split( splitreg ); p++;
pieces[ p ] = "7,9,10,8".split( splitreg ); p++;
pieces[ p ] = "7,9,11,11".split( splitreg ); p++;
pieces[ p ] = "7,9,12,11".split( splitreg ); p++;
pieces[ p ] = "7,10,9,12".split( splitreg ); p++;
pieces[ p ] = "7,13,11,8".split( splitreg ); p++;
pieces[ p ] = "8,8,11,11".split( splitreg ); p++;
pieces[ p ] = "8,8,13,10".split( splitreg ); p++;
pieces[ p ] = "8,8,13,12".split( splitreg ); p++;
pieces[ p ] = "8,10,10,9".split( splitreg ); p++;
pieces[ p ] = "8,11,11,13".split( splitreg ); p++;
pieces[ p ] = "8,12,10,10".split( splitreg ); p++;
pieces[ p ] = "9,11,10,13".split( splitreg ); p++;
pieces[ p ] = "9,11,13,13".split( splitreg ); p++;
pieces[ p ] = "10,10,12,13".split( splitreg ); p++;
pieces[ p ] = "10,13,12,12".split( splitreg ); p++;
pieces[ p ] = "10,13,13,13".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

