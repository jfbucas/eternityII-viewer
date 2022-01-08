
puzzles[ nb_puzzles ] = "brendan/pieces_10x03.txt.js,Brendan 10x03".split( splitreg ); nb_puzzles++;

if ( puzzle == "brendan/pieces_10x03.txt.js" ) {

board_w = 10;
board_h = 3;


pieces[ p ] = "0,0,1,1".split( splitreg ); p++;
pieces[ p ] = "0,0,1,2".split( splitreg ); p++;
pieces[ p ] = "0,0,2,1".split( splitreg ); p++;
pieces[ p ] = "0,0,3,1".split( splitreg ); p++;
pieces[ p ] = "0,1,4,1".split( splitreg ); p++;
pieces[ p ] = "0,1,4,3".split( splitreg ); p++;
pieces[ p ] = "0,1,5,3".split( splitreg ); p++;
pieces[ p ] = "0,1,6,3".split( splitreg ); p++;
pieces[ p ] = "0,1,7,1".split( splitreg ); p++;
pieces[ p ] = "0,1,7,2".split( splitreg ); p++;
pieces[ p ] = "0,2,4,2".split( splitreg ); p++;
pieces[ p ] = "0,2,4,3".split( splitreg ); p++;
pieces[ p ] = "0,2,5,1".split( splitreg ); p++;
pieces[ p ] = "0,2,5,3".split( splitreg ); p++;
pieces[ p ] = "0,2,6,1".split( splitreg ); p++;
pieces[ p ] = "0,2,6,2".split( splitreg ); p++;
pieces[ p ] = "0,3,4,1".split( splitreg ); p++;
pieces[ p ] = "0,3,4,2".split( splitreg ); p++;
pieces[ p ] = "0,3,4,3".split( splitreg ); p++;
pieces[ p ] = "0,3,5,2".split( splitreg ); p++;
pieces[ p ] = "0,3,6,2".split( splitreg ); p++;
pieces[ p ] = "0,3,6,3".split( splitreg ); p++;
pieces[ p ] = "4,5,4,7".split( splitreg ); p++;
pieces[ p ] = "4,7,5,5".split( splitreg ); p++;
pieces[ p ] = "4,7,5,6".split( splitreg ); p++;
pieces[ p ] = "4,7,5,7".split( splitreg ); p++;
pieces[ p ] = "4,7,6,6".split( splitreg ); p++;
pieces[ p ] = "4,7,6,7".split( splitreg ); p++;
pieces[ p ] = "5,5,7,6".split( splitreg ); p++;
pieces[ p ] = "5,6,7,6".split( splitreg ); p++;

// piece,space,rotation
fixed[ f ] = "0,0,1".split( splitreg ); f++;

nb_pieces = p;
nb_fixed = f;

}

