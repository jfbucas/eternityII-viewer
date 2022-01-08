
puzzles[ nb_puzzles ] = "brendan/pieces_09x09.txt.js,Brendan 09x09".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_09x09.txt.js" ) {

board_w = 9;
board_h = 9;


pieces[ p ] = "0,0,1,1".split( splitreg ); p++;
pieces[ p ] = "0,0,1,4".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,2,2".split( splitreg ); p++;
pieces[ p ] = "0,1,7,4".split( splitreg ); p++;
pieces[ p ] = "0,1,8,1".split( splitreg ); p++;
pieces[ p ] = "0,1,9,2".split( splitreg ); p++;
pieces[ p ] = "0,1,10,2".split( splitreg ); p++;
pieces[ p ] = "0,1,10,3".split( splitreg ); p++;
pieces[ p ] = "0,1,10,4".split( splitreg ); p++;
pieces[ p ] = "0,2,5,4".split( splitreg ); p++;
pieces[ p ] = "0,2,7,3".split( splitreg ); p++;
pieces[ p ] = "0,2,9,2".split( splitreg ); p++;
pieces[ p ] = "0,2,12,2".split( splitreg ); p++;
pieces[ p ] = "0,2,13,1".split( splitreg ); p++;
pieces[ p ] = "0,2,13,4".split( splitreg ); p++;
pieces[ p ] = "0,3,5,2".split( splitreg ); p++;
pieces[ p ] = "0,3,7,2".split( splitreg ); p++;
pieces[ p ] = "0,3,7,3".split( splitreg ); p++;
pieces[ p ] = "0,3,8,3".split( splitreg ); p++;
pieces[ p ] = "0,3,9,3".split( splitreg ); p++;
pieces[ p ] = "0,3,11,1".split( splitreg ); p++;
pieces[ p ] = "0,3,11,2".split( splitreg ); p++;
pieces[ p ] = "0,3,13,3".split( splitreg ); p++;
pieces[ p ] = "0,4,5,1".split( splitreg ); p++;
pieces[ p ] = "0,4,5,4".split( splitreg ); p++;
pieces[ p ] = "0,4,6,4".split( splitreg ); p++;
pieces[ p ] = "0,4,8,3".split( splitreg ); p++;
pieces[ p ] = "0,4,11,1".split( splitreg ); p++;
pieces[ p ] = "0,4,12,1".split( splitreg ); p++;
pieces[ p ] = "0,4,12,3".split( splitreg ); p++;
pieces[ p ] = "0,4,13,4".split( splitreg ); p++;
pieces[ p ] = "5,5,12,8".split( splitreg ); p++;
pieces[ p ] = "5,6,5,9".split( splitreg ); p++;
pieces[ p ] = "5,6,8,8".split( splitreg ); p++;
pieces[ p ] = "5,6,9,7".split( splitreg ); p++;
pieces[ p ] = "5,6,13,8".split( splitreg ); p++;
pieces[ p ] = "5,7,6,8".split( splitreg ); p++;
pieces[ p ] = "5,7,8,11".split( splitreg ); p++;
pieces[ p ] = "5,7,11,12".split( splitreg ); p++;
pieces[ p ] = "5,7,13,11".split( splitreg ); p++;
pieces[ p ] = "5,8,6,7".split( splitreg ); p++;
pieces[ p ] = "5,8,8,8".split( splitreg ); p++;
pieces[ p ] = "5,8,10,8".split( splitreg ); p++;
pieces[ p ] = "5,9,10,6".split( splitreg ); p++;
pieces[ p ] = "5,10,9,9".split( splitreg ); p++;
pieces[ p ] = "5,11,5,13".split( splitreg ); p++;
pieces[ p ] = "5,11,11,10".split( splitreg ); p++;
pieces[ p ] = "5,12,6,10".split( splitreg ); p++;
pieces[ p ] = "5,12,10,11".split( splitreg ); p++;
pieces[ p ] = "5,12,12,8".split( splitreg ); p++;
pieces[ p ] = "6,6,8,12".split( splitreg ); p++;
pieces[ p ] = "6,7,6,9".split( splitreg ); p++;
pieces[ p ] = "6,7,10,13".split( splitreg ); p++;
pieces[ p ] = "6,8,10,8".split( splitreg ); p++;
pieces[ p ] = "6,8,13,7".split( splitreg ); p++;
pieces[ p ] = "6,9,9,8".split( splitreg ); p++;
pieces[ p ] = "6,9,9,9".split( splitreg ); p++;
pieces[ p ] = "6,9,11,7".split( splitreg ); p++;
pieces[ p ] = "6,10,8,10".split( splitreg ); p++;
pieces[ p ] = "6,10,12,12".split( splitreg ); p++;
pieces[ p ] = "6,10,13,11".split( splitreg ); p++;
pieces[ p ] = "6,11,7,12".split( splitreg ); p++;
pieces[ p ] = "6,11,11,13".split( splitreg ); p++;
pieces[ p ] = "6,11,13,12".split( splitreg ); p++;
pieces[ p ] = "6,12,9,10".split( splitreg ); p++;
pieces[ p ] = "7,7,11,11".split( splitreg ); p++;
pieces[ p ] = "7,7,12,9".split( splitreg ); p++;
pieces[ p ] = "7,7,13,12".split( splitreg ); p++;
pieces[ p ] = "7,9,11,13".split( splitreg ); p++;
pieces[ p ] = "7,9,13,9".split( splitreg ); p++;
pieces[ p ] = "7,10,12,10".split( splitreg ); p++;
pieces[ p ] = "7,12,10,13".split( splitreg ); p++;
pieces[ p ] = "7,13,8,13".split( splitreg ); p++;
pieces[ p ] = "8,11,12,13".split( splitreg ); p++;
pieces[ p ] = "8,12,13,9".split( splitreg ); p++;
pieces[ p ] = "8,13,11,10".split( splitreg ); p++;
pieces[ p ] = "9,9,10,13".split( splitreg ); p++;
pieces[ p ] = "9,10,10,11".split( splitreg ); p++;
pieces[ p ] = "10,11,12,12".split( splitreg ); p++;
pieces[ p ] = "11,12,13,13".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

