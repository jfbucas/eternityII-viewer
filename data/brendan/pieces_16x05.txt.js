
puzzles[ nb_puzzles ] = "brendan/pieces_16x05.txt.js,Brendan 16x05".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_16x05.txt.js" ) {

board_w = 16;
board_h = 5;


pieces[ p ] = "0,0,1,3".split( splitreg ); p++;
pieces[ p ] = "0,0,2,3".split( splitreg ); p++;
pieces[ p ] = "0,0,4,1".split( splitreg ); p++;
pieces[ p ] = "0,0,4,2".split( splitreg ); p++;
pieces[ p ] = "0,1,5,4".split( splitreg ); p++;
pieces[ p ] = "0,1,7,4".split( splitreg ); p++;
pieces[ p ] = "0,1,8,4".split( splitreg ); p++;
pieces[ p ] = "0,1,9,2".split( splitreg ); p++;
pieces[ p ] = "0,1,10,1".split( splitreg ); p++;
pieces[ p ] = "0,1,10,2".split( splitreg ); p++;
pieces[ p ] = "0,1,10,4".split( splitreg ); p++;
pieces[ p ] = "0,1,11,1".split( splitreg ); p++;
pieces[ p ] = "0,1,12,3".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "0,2,5,2".split( splitreg ); p++;
pieces[ p ] = "0,2,6,2".split( splitreg ); p++;
pieces[ p ] = "0,2,7,3".split( splitreg ); p++;
pieces[ p ] = "0,2,8,1".split( splitreg ); p++;
pieces[ p ] = "0,2,8,2".split( splitreg ); p++;
pieces[ p ] = "0,2,11,1".split( splitreg ); p++;
pieces[ p ] = "0,2,11,2".split( splitreg ); p++;
pieces[ p ] = "0,2,12,4".split( splitreg ); p++;
pieces[ p ] = "0,3,5,3".split( splitreg ); p++;
pieces[ p ] = "0,3,6,1".split( splitreg ); p++;
pieces[ p ] = "0,3,7,1".split( splitreg ); p++;
pieces[ p ] = "0,3,7,2".split( splitreg ); p++;
pieces[ p ] = "0,3,7,4".split( splitreg ); p++;
pieces[ p ] = "0,3,8,3".split( splitreg ); p++;
pieces[ p ] = "0,3,10,1".split( splitreg ); p++;
pieces[ p ] = "0,3,10,4".split( splitreg ); p++;
pieces[ p ] = "0,3,12,3".split( splitreg ); p++;
pieces[ p ] = "0,4,7,2".split( splitreg ); p++;
pieces[ p ] = "0,4,8,3".split( splitreg ); p++;
pieces[ p ] = "0,4,9,1".split( splitreg ); p++;
pieces[ p ] = "0,4,9,2".split( splitreg ); p++;
pieces[ p ] = "0,4,10,3".split( splitreg ); p++;
pieces[ p ] = "0,4,11,4".split( splitreg ); p++;
pieces[ p ] = "0,4,12,4".split( splitreg ); p++;
pieces[ p ] = "5,5,9,6".split( splitreg ); p++;
pieces[ p ] = "5,6,7,12".split( splitreg ); p++;
pieces[ p ] = "5,6,9,9".split( splitreg ); p++;
pieces[ p ] = "5,6,11,7".split( splitreg ); p++;
pieces[ p ] = "5,7,6,6".split( splitreg ); p++;
pieces[ p ] = "5,7,6,10".split( splitreg ); p++;
pieces[ p ] = "5,7,8,9".split( splitreg ); p++;
pieces[ p ] = "5,7,9,7".split( splitreg ); p++;
pieces[ p ] = "5,7,9,9".split( splitreg ); p++;
pieces[ p ] = "5,8,12,9".split( splitreg ); p++;
pieces[ p ] = "5,8,12,11".split( splitreg ); p++;
pieces[ p ] = "5,9,11,8".split( splitreg ); p++;
pieces[ p ] = "5,9,11,9".split( splitreg ); p++;
pieces[ p ] = "5,10,7,10".split( splitreg ); p++;
pieces[ p ] = "5,10,8,7".split( splitreg ); p++;
pieces[ p ] = "5,10,9,8".split( splitreg ); p++;
pieces[ p ] = "5,11,6,11".split( splitreg ); p++;
pieces[ p ] = "5,11,8,11".split( splitreg ); p++;
pieces[ p ] = "5,11,11,6".split( splitreg ); p++;
pieces[ p ] = "5,12,6,9".split( splitreg ); p++;
pieces[ p ] = "5,12,8,12".split( splitreg ); p++;
pieces[ p ] = "6,7,9,11".split( splitreg ); p++;
pieces[ p ] = "6,8,6,9".split( splitreg ); p++;
pieces[ p ] = "6,8,9,10".split( splitreg ); p++;
pieces[ p ] = "6,8,10,9".split( splitreg ); p++;
pieces[ p ] = "6,8,12,10".split( splitreg ); p++;
pieces[ p ] = "6,10,6,12".split( splitreg ); p++;
pieces[ p ] = "6,10,8,12".split( splitreg ); p++;
pieces[ p ] = "6,10,11,10".split( splitreg ); p++;
pieces[ p ] = "6,11,8,10".split( splitreg ); p++;
pieces[ p ] = "6,11,12,8".split( splitreg ); p++;
pieces[ p ] = "6,12,7,9".split( splitreg ); p++;
pieces[ p ] = "6,12,9,9".split( splitreg ); p++;
pieces[ p ] = "7,7,11,10".split( splitreg ); p++;
pieces[ p ] = "7,7,12,12".split( splitreg ); p++;
pieces[ p ] = "7,8,12,12".split( splitreg ); p++;
pieces[ p ] = "7,10,7,11".split( splitreg ); p++;
pieces[ p ] = "7,11,10,8".split( splitreg ); p++;
pieces[ p ] = "8,10,12,9".split( splitreg ); p++;
pieces[ p ] = "8,11,9,9".split( splitreg ); p++;
pieces[ p ] = "8,11,10,11".split( splitreg ); p++;
pieces[ p ] = "8,12,12,12".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

