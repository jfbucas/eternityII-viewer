
puzzles[ nb_puzzles ] = "brendan/pieces_07x04.txt.js,Brendan 07x04".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_07x04.txt.js" ) {

board_w = 7;
board_h = 4;


pieces[ p ] = "0,0,1,3".split( splitreg ); p++;
pieces[ p ] = "0,0,2,2".split( splitreg ); p++;
pieces[ p ] = "0,0,3,1".split( splitreg ); p++;
pieces[ p ] = "0,0,3,2".split( splitreg ); p++;
pieces[ p ] = "0,1,4,3".split( splitreg ); p++;
pieces[ p ] = "0,1,5,1".split( splitreg ); p++;
pieces[ p ] = "0,1,6,1".split( splitreg ); p++;
pieces[ p ] = "0,1,7,2".split( splitreg ); p++;
pieces[ p ] = "0,1,7,3".split( splitreg ); p++;
pieces[ p ] = "0,2,4,2".split( splitreg ); p++;
pieces[ p ] = "0,2,4,3".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "0,2,5,3".split( splitreg ); p++;
pieces[ p ] = "0,2,7,3".split( splitreg ); p++;
pieces[ p ] = "0,3,4,1".split( splitreg ); p++;
pieces[ p ] = "0,3,4,2".split( splitreg ); p++;
pieces[ p ] = "0,3,5,2".split( splitreg ); p++;
pieces[ p ] = "0,3,6,1".split( splitreg ); p++;
pieces[ p ] = "4,4,6,5".split( splitreg ); p++;
pieces[ p ] = "4,5,5,5".split( splitreg ); p++;
pieces[ p ] = "4,6,4,7".split( splitreg ); p++;
pieces[ p ] = "4,6,6,5".split( splitreg ); p++;
pieces[ p ] = "4,6,6,7".split( splitreg ); p++;
pieces[ p ] = "4,7,6,6".split( splitreg ); p++;
pieces[ p ] = "4,7,7,7".split( splitreg ); p++;
pieces[ p ] = "5,5,5,7".split( splitreg ); p++;
pieces[ p ] = "5,5,6,7".split( splitreg ); p++;
pieces[ p ] = "6,6,6,7".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

