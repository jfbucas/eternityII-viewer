
puzzles[ nb_puzzles ] = "brendan/pieces_06x04.txt.js,Brendan 06x04".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_06x04.txt.js" ) {

board_w = 6;
board_h = 4;


pieces[ p ] = "0,0,1,1".split( splitreg ); p++;
pieces[ p ] = "0,0,1,3".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,3,2".split( splitreg ); p++;
pieces[ p ] = "0,1,4,1".split( splitreg ); p++;
pieces[ p ] = "0,1,4,3".split( splitreg ); p++;
pieces[ p ] = "0,1,5,2".split( splitreg ); p++;
pieces[ p ] = "0,1,5,3".split( splitreg ); p++;
pieces[ p ] = "0,2,4,1".split( splitreg ); p++;
pieces[ p ] = "0,2,4,2".split( splitreg ); p++;
pieces[ p ] = "0,2,6,1".split( splitreg ); p++;
pieces[ p ] = "0,2,6,3".split( splitreg ); p++;
pieces[ p ] = "0,3,6,2".split( splitreg ); p++;
pieces[ p ] = "0,3,7,1".split( splitreg ); p++;
pieces[ p ] = "0,3,7,2".split( splitreg ); p++;
pieces[ p ] = "0,3,7,3".split( splitreg ); p++;
pieces[ p ] = "4,4,4,6".split( splitreg ); p++;
pieces[ p ] = "4,5,4,6".split( splitreg ); p++;
pieces[ p ] = "4,5,5,7".split( splitreg ); p++;
pieces[ p ] = "4,6,5,5".split( splitreg ); p++;
pieces[ p ] = "4,7,5,7".split( splitreg ); p++;
pieces[ p ] = "5,5,6,7".split( splitreg ); p++;
pieces[ p ] = "5,6,5,7".split( splitreg ); p++;
pieces[ p ] = "6,6,7,7".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

