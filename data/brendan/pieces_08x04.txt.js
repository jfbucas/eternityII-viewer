
puzzles[ nb_puzzles ] = "brendan/pieces_08x04.txt.js,Brendan 08x04".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_08x04.txt.js" ) {

board_w = 8;
board_h = 4;


pieces[ p ] = "0,0,1,1".split( splitreg ); p++;
pieces[ p ] = "0,0,1,3".split( splitreg ); p++;
pieces[ p ] = "0,0,2,3".split( splitreg ); p++;
pieces[ p ] = "0,0,3,2".split( splitreg ); p++;
pieces[ p ] = "0,1,4,2".split( splitreg ); p++;
pieces[ p ] = "0,1,4,3".split( splitreg ); p++;
pieces[ p ] = "0,1,5,2".split( splitreg ); p++;
pieces[ p ] = "0,1,6,3".split( splitreg ); p++;
pieces[ p ] = "0,1,7,1".split( splitreg ); p++;
pieces[ p ] = "0,2,4,2".split( splitreg ); p++;
pieces[ p ] = "0,2,4,3".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "0,2,5,2".split( splitreg ); p++;
pieces[ p ] = "0,2,6,1".split( splitreg ); p++;
pieces[ p ] = "0,2,8,1".split( splitreg ); p++;
pieces[ p ] = "0,3,4,2".split( splitreg ); p++;
pieces[ p ] = "0,3,4,3".split( splitreg ); p++;
pieces[ p ] = "0,3,5,1".split( splitreg ); p++;
pieces[ p ] = "0,3,8,1".split( splitreg ); p++;
pieces[ p ] = "0,3,8,2".split( splitreg ); p++;
pieces[ p ] = "4,4,4,7".split( splitreg ); p++;
pieces[ p ] = "4,5,5,6".split( splitreg ); p++;
pieces[ p ] = "4,5,8,8".split( splitreg ); p++;
pieces[ p ] = "4,6,7,5".split( splitreg ); p++;
pieces[ p ] = "4,7,6,5".split( splitreg ); p++;
pieces[ p ] = "4,8,8,7".split( splitreg ); p++;
pieces[ p ] = "5,5,6,8".split( splitreg ); p++;
pieces[ p ] = "5,6,7,8".split( splitreg ); p++;
pieces[ p ] = "5,7,6,6".split( splitreg ); p++;
pieces[ p ] = "5,7,8,8".split( splitreg ); p++;
pieces[ p ] = "6,7,6,8".split( splitreg ); p++;
pieces[ p ] = "6,7,7,7".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

