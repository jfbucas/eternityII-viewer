
puzzles[ nb_puzzles ] = "brendan/pieces_11x03.txt.js,Brendan 11x03".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_11x03.txt.js" ) {

board_w = 11;
board_h = 3;


pieces[ p ] = "0,0,3,1".split( splitreg ); p++;
pieces[ p ] = "0,0,3,2".split( splitreg ); p++;
pieces[ p ] = "0,0,3,4".split( splitreg ); p++;
pieces[ p ] = "0,0,4,1".split( splitreg ); p++;
pieces[ p ] = "0,1,6,1".split( splitreg ); p++;
pieces[ p ] = "0,1,6,3".split( splitreg ); p++;
pieces[ p ] = "0,1,7,2".split( splitreg ); p++;
pieces[ p ] = "0,1,7,3".split( splitreg ); p++;
pieces[ p ] = "0,1,8,2".split( splitreg ); p++;
pieces[ p ] = "0,1,8,3".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "0,2,5,2".split( splitreg ); p++;
pieces[ p ] = "0,2,6,3".split( splitreg ); p++;
pieces[ p ] = "0,2,7,3".split( splitreg ); p++;
pieces[ p ] = "0,2,7,4".split( splitreg ); p++;
pieces[ p ] = "0,2,8,1".split( splitreg ); p++;
pieces[ p ] = "0,3,5,4".split( splitreg ); p++;
pieces[ p ] = "0,3,6,2".split( splitreg ); p++;
pieces[ p ] = "0,3,6,4".split( splitreg ); p++;
pieces[ p ] = "0,4,6,1".split( splitreg ); p++;
pieces[ p ] = "0,4,7,3".split( splitreg ); p++;
pieces[ p ] = "0,4,7,4".split( splitreg ); p++;
pieces[ p ] = "0,4,8,2".split( splitreg ); p++;
pieces[ p ] = "0,4,8,4".split( splitreg ); p++;
pieces[ p ] = "5,5,5,8".split( splitreg ); p++;
pieces[ p ] = "5,5,6,6".split( splitreg ); p++;
pieces[ p ] = "5,5,6,8".split( splitreg ); p++;
pieces[ p ] = "5,6,7,7".split( splitreg ); p++;
pieces[ p ] = "5,7,7,6".split( splitreg ); p++;
pieces[ p ] = "5,7,8,7".split( splitreg ); p++;
pieces[ p ] = "5,8,8,6".split( splitreg ); p++;
pieces[ p ] = "6,7,6,8".split( splitreg ); p++;
pieces[ p ] = "7,8,8,8".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

