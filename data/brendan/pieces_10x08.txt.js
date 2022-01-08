
puzzles[ nb_puzzles ] = "brendan/pieces_10x08.txt.js,Brendan 10x08".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_10x08.txt.js" ) {

board_w = 10;
board_h = 8;


pieces[ p ] = "0,0,1,1".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,2,4".split( splitreg ); p++;
pieces[ p ] = "0,0,3,1".split( splitreg ); p++;
pieces[ p ] = "0,1,5,4".split( splitreg ); p++;
pieces[ p ] = "0,1,6,4".split( splitreg ); p++;
pieces[ p ] = "0,1,8,1".split( splitreg ); p++;
pieces[ p ] = "0,1,10,2".split( splitreg ); p++;
pieces[ p ] = "0,1,13,1".split( splitreg ); p++;
pieces[ p ] = "0,1,13,2".split( splitreg ); p++;
pieces[ p ] = "0,1,13,3".split( splitreg ); p++;
pieces[ p ] = "0,2,6,2".split( splitreg ); p++;
pieces[ p ] = "0,2,6,4".split( splitreg ); p++;
pieces[ p ] = "0,2,8,2".split( splitreg ); p++;
pieces[ p ] = "0,2,8,4".split( splitreg ); p++;
pieces[ p ] = "0,2,9,1".split( splitreg ); p++;
pieces[ p ] = "0,2,13,1".split( splitreg ); p++;
pieces[ p ] = "0,3,5,3".split( splitreg ); p++;
pieces[ p ] = "0,3,5,4".split( splitreg ); p++;
pieces[ p ] = "0,3,6,1".split( splitreg ); p++;
pieces[ p ] = "0,3,7,3".split( splitreg ); p++;
pieces[ p ] = "0,3,9,3".split( splitreg ); p++;
pieces[ p ] = "0,3,11,2".split( splitreg ); p++;
pieces[ p ] = "0,3,12,2".split( splitreg ); p++;
pieces[ p ] = "0,4,6,3".split( splitreg ); p++;
pieces[ p ] = "0,4,7,4".split( splitreg ); p++;
pieces[ p ] = "0,4,8,3".split( splitreg ); p++;
pieces[ p ] = "0,4,9,2".split( splitreg ); p++;
pieces[ p ] = "0,4,9,4".split( splitreg ); p++;
pieces[ p ] = "0,4,10,3".split( splitreg ); p++;
pieces[ p ] = "0,4,12,3".split( splitreg ); p++;
pieces[ p ] = "0,4,13,2".split( splitreg ); p++;
pieces[ p ] = "5,5,7,7".split( splitreg ); p++;
pieces[ p ] = "5,5,13,13".split( splitreg ); p++;
pieces[ p ] = "5,6,5,11".split( splitreg ); p++;
pieces[ p ] = "5,7,8,6".split( splitreg ); p++;
pieces[ p ] = "5,7,9,9".split( splitreg ); p++;
pieces[ p ] = "5,8,11,10".split( splitreg ); p++;
pieces[ p ] = "5,8,13,7".split( splitreg ); p++;
pieces[ p ] = "5,9,7,6".split( splitreg ); p++;
pieces[ p ] = "5,9,8,7".split( splitreg ); p++;
pieces[ p ] = "5,9,10,8".split( splitreg ); p++;
pieces[ p ] = "5,9,12,12".split( splitreg ); p++;
pieces[ p ] = "5,10,7,10".split( splitreg ); p++;
pieces[ p ] = "5,10,11,12".split( splitreg ); p++;
pieces[ p ] = "5,11,7,10".split( splitreg ); p++;
pieces[ p ] = "5,11,13,10".split( splitreg ); p++;
pieces[ p ] = "5,12,6,6".split( splitreg ); p++;
pieces[ p ] = "5,12,8,8".split( splitreg ); p++;
pieces[ p ] = "5,13,7,11".split( splitreg ); p++;
pieces[ p ] = "5,13,8,7".split( splitreg ); p++;
pieces[ p ] = "5,13,13,9".split( splitreg ); p++;
pieces[ p ] = "6,6,8,10".split( splitreg ); p++;
pieces[ p ] = "6,6,12,9".split( splitreg ); p++;
pieces[ p ] = "6,6,13,12".split( splitreg ); p++;
pieces[ p ] = "6,7,12,8".split( splitreg ); p++;
pieces[ p ] = "6,8,10,7".split( splitreg ); p++;
pieces[ p ] = "6,10,7,11".split( splitreg ); p++;
pieces[ p ] = "6,10,8,7".split( splitreg ); p++;
pieces[ p ] = "6,11,8,11".split( splitreg ); p++;
pieces[ p ] = "6,11,10,13".split( splitreg ); p++;
pieces[ p ] = "6,11,11,12".split( splitreg ); p++;
pieces[ p ] = "6,11,13,9".split( splitreg ); p++;
pieces[ p ] = "6,12,7,10".split( splitreg ); p++;
pieces[ p ] = "6,12,9,11".split( splitreg ); p++;
pieces[ p ] = "7,8,8,9".split( splitreg ); p++;
pieces[ p ] = "7,9,9,10".split( splitreg ); p++;
pieces[ p ] = "7,11,7,12".split( splitreg ); p++;
pieces[ p ] = "7,12,9,11".split( splitreg ); p++;
pieces[ p ] = "7,13,11,8".split( splitreg ); p++;
pieces[ p ] = "8,10,8,13".split( splitreg ); p++;
pieces[ p ] = "8,10,11,10".split( splitreg ); p++;
pieces[ p ] = "8,13,13,12".split( splitreg ); p++;
pieces[ p ] = "9,9,9,11".split( splitreg ); p++;
pieces[ p ] = "9,10,12,13".split( splitreg ); p++;
pieces[ p ] = "9,10,13,11".split( splitreg ); p++;
pieces[ p ] = "9,12,10,11".split( splitreg ); p++;
pieces[ p ] = "10,12,12,13".split( splitreg ); p++;
pieces[ p ] = "10,13,11,12".split( splitreg ); p++;
pieces[ p ] = "11,12,12,12".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

